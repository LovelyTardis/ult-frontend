import { useEffect } from "react";

export default function ViewTitle({ title }) {
  useEffect(() => {
    document.title = `ULT - ${title}`;
  }, []);

  return <h2>{title}</h2>;
}
