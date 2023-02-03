import { UltCard } from "./index";

function UltContainer({ ultsToShow }) {
  return (
    <div className="ult-container">
      {Object.values(ultsToShow).map((ult) => {
        return <UltCard key={ult._id} ult={ult} />;
      })}
    </div>
  );
}

export default UltContainer;
