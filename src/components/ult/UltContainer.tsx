import { useEffect, useState } from "react";

import type { UltType } from "../../types";

import { apiCall, tryConnection } from "../../helpers";
import UltCard from "./UltCard";
// import ErrorDisplay from "../ErrorDisplay.astro";
// import UltCard from "./UltCard.astro";

function UltContainer() {
  const [ults, setUlts] = useState<UltType[]>([]);

  const fetchData = async () => {
    try {
      const connected = await tryConnection();
      const {
        error = false,
        code,
        data,
      } = connected !== true ? connected : await apiCall("/ult");

      if (error) throw new Error(code, data);

      data.ults.forEach((ult: UltType) => {
        setUlts((prev) => [...prev, ult]);
      });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="ult-container">
      {Array.isArray(ults) ? (
        ults.map((ult: UltType) => {
          return <UltCard key={ult._id} ult={ult} />;
        })
      ) : (
        <h2>ERROR</h2>
        // <ErrorDisplay />
      )}
    </div>
  );
}

export default UltContainer;
