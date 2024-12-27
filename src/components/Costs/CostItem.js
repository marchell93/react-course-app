import "./CostItem.css";
import CostDate from "./CostDate";
import Card from "../UI/Card";
import React, { useState } from "react";

const CostItem = (props) => {
  const [description, setDescription] = useState(props.description);

  function changeDescriptionHandler() {
    setDescription("Новое описание");
    console.log(description);
  }

  return (
    <li>
      <Card className="cost-item">
        <CostDate date={props.date} />
        <div className="cost-item__description">
          <h2>{description}</h2>
          <div className="cost-item__price">${props.amount}</div>
          <button onClick={changeDescriptionHandler}>Изменить описание</button>
        </div>
      </Card>
    </li>
  );
};

export default CostItem;
