import { ultsSort } from "../../helpers";
import { UltCard } from "./index";

function UltContainer({ ultsToShow }) {
  const ults = Object.values(ultsToShow);
  ultsSort(ults);

  return (
    <div className="ult-container">
      {ults.map((ult) => {
        return <UltCard key={ult._id} ult={ult} />;
      })}
    </div>
  );
}

export default UltContainer;
