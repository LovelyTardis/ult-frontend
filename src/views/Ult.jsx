import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UltCard, UltContainer } from "../components/ult";
import ViewTitle from "../components/ViewTitle";
import { apiCall, tryConnection } from "../helpers";

export default function Ult() {
  const [ult, setUlt] = useState(null);
  const { ultId } = useParams();
  let error, code, data;

  useEffect(() => {
    (async () => {
      try {
        const connected = await tryConnection();
        ({ error, code, data } =
          connected !== true ? connected : await apiCall(`/ult/${ultId}`));

        if (error) throw new Error(code, data);
      } catch (_) {
        console.error({ data, code });
      }
      setUlt(data);
    })();
  }, [ultId]);

  return (
    ult && (
      <>
        <ViewTitle title="Ult viewer" />
        <UltCard ult={ult} />
        {ult.comments.length > 0 ? (
          <>
            <h4>Comments</h4>
            <UltContainer ultsToShow={ult.comments} />
          </>
        ) : (
          <h4>No comments for this ULT</h4>
        )}
      </>
    )
  );
}
