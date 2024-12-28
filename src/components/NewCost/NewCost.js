import CostForm from "./CostForm";
import "./NewCost.css";
import React, { useState } from "react";

const NewCost = (props) => {
  const [showForm, setShowForm] = useState(false);
  const saveCostDataHandler = (inputCostData) => {
    const costData = {
      id: Math.random().toString(),
      ...inputCostData,
    };

    props.onAddCost(costData);
  };
  const showFormHandler = () => {
    setShowForm(true);
  };

  const hideFormHandler = () => {
    setShowForm(false);
  };

  if (!showForm) {
    return (
      <div className="new-cost">
        <button onClick={showFormHandler}>Добавить новый расход</button>
      </div>
    );
  }
  return (
    <div className="new-cost">
      <CostForm
        onSaveCostData={saveCostDataHandler}
        onHideForm={hideFormHandler}
      />
    </div>
  );
};

export default NewCost;
