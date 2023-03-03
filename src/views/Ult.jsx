import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UltCard } from "../components/ult";
import { apiCall, tryConnection } from "../helpers";

export default function Ult() {
  const [ult, setUlt] = useState(null);
  const { ultId } = useParams();
  let error, code, data;

  const fetchData = async () => {
    try {
      const connected = await tryConnection();
      ({ error, code, data } =
        connected !== true ? connected : await apiCall(`/ult/${ultId}`));

      if (error) throw new Error(code, data);
    } catch (_) {
      console.error({ data, code });
    }

    console.log(data);
    setUlt(data);
  };

  useEffect(() => {
    document.title = "Ult - Viewer";
    fetchData();
  });

  console.log("data:", ult);

  return ult && <UltCard ult={ult} />;
}
