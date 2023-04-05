import { useState } from "react";
import UltCreate from "./UltCreate";

function UltCreateAsComment({ ultId }) {
  const [wantsToComment, setWantsToComment] = useState(false);

  const toggleUltCreate = () => {
    setWantsToComment(!wantsToComment);
  };

  return (
    <>
      <button className="material-icons" onClick={toggleUltCreate}>
        comment
      </button>
      {wantsToComment ? <UltCreate ultId={ultId} /> : null}
    </>
  );
}

export default UltCreateAsComment;
