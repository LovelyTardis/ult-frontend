import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UltCard, UltContainer, UltCreateAsComment } from "../components/ult";
import ViewTitle from "../components/ViewTitle";
import { apiCall, tryConnection } from "../helpers";

export default function Ult() {
  const [ult, setUlt] = useState(null);
  const [comments, setComments] = useState(null);
  const { ultId } = useParams();
  let error, code, data;

  const fetchData = async () => {
    try {
      const connected = await tryConnection();
      ({ error, code, data } =
        connected !== true ? connected : await apiCall(`/ult/${ultId}`));

      if (error) throw new Error(code, data);

      setUlt(data);
      setComments(data.comments);
    } catch (_) {
      console.error({ data, code });
    }
  };

  useEffect(() => {
    fetchData();
  }, [ultId]);

  const refreshUlts = () => {
    fetchData();
  };

  return (
    ult && (
      <>
        <ViewTitle title="Ult viewer" />
        <UltCard ult={ult} />
        <h4>Comments ({comments.length})</h4>
        <UltCreateAsComment ultId={ult._id} refreshUlts={refreshUlts} />
        <UltContainer ultsToShow={comments} />
      </>
    )
  );
}
