import { useEffect, useState } from "react";
import { UltCreate, UltContainer } from "../components/ult";
import { apiCall, tryConnection } from "../helpers";

export default function Home() {
  const [ults, setUlts] = useState({});

  const fetchData = async (controller = new AbortController()) => {
    try {
      const connected = await tryConnection(controller.signal);
      const { error, code, data } =
        connected !== true
          ? connected
          : await apiCall("/ult", "GET", {}, controller.signal);

      if (error) throw new Error(code, data);

      setUlts(data.ults);
    } catch (err) {
      if (err.name !== "AbortError") console.error({ data, code });
    }
  };

  useEffect(() => {
    document.title = "Ult - Home";
    let controller = new AbortController();
    fetchData(controller);
    return () => {
      controller.abort();
    };
  }, []);

  const refreshUlts = () => {
    fetchData();
  };

  return (
    <>
      <UltCreate refreshUlts={refreshUlts} />
      <button onClick={refreshUlts}>
        <span className="material-symbols-outlined">autorenew</span>
      </button>
      <UltContainer ultsToShow={ults} />
    </>
  );
}
