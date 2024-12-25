import CostForm from "./CostForm";
import "./NewCost.css";

const NewCost = (props) => {
  const saveCostDataHandler = (inputCostData) => {
    const costData = {
      id: Math.random().toString(),
      ...inputCostData,
    };

    props.onAddCost(costData);
  };

  return (
    <div className="new-cost">
      <CostForm onSaveCostData={saveCostDataHandler} />
    </div>
  );
};

export default NewCost;
