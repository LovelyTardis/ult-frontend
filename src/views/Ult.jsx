import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UltCard, UltContainer, UltCreateAsComment } from "../components/ult";
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

        setUlt(data);
      } catch (_) {
        console.error({ data, code });
      }
    })();
  }, [ultId]);

  return (
    ult && (
      <>
        <ViewTitle title="Ult viewer" />
        <UltCard ult={ult} />
        <h4>Comments ({ult.comments.length})</h4>
        <UltCreateAsComment ultId={ult._id} />
        <UltContainer ultsToShow={ult.comments} />
      </>
    )
  );
}
