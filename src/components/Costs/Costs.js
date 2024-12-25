import CostItem from "./CostItem";
import "./Costs.css";
import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import React, { useState } from "react";

const Costs = (props) => {
  const [selectedYear, setSelectedYear] = useState("2021");

  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredCosts = props.costs.filter(
    (cost) => cost.date.getFullYear().toString() === selectedYear
  );

  let contentCosts = <p>Нет расходов в этом году</p>;

  if (filteredCosts.length > 0) {
    contentCosts = filteredCosts.map((cost) => (
      <CostItem
        key={cost.id}
        date={cost.date}
        description={cost.description}
        amount={cost.amount}
      />
    ));
  }

  return (
    <div>
      <Card className="costs">
        <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
        {contentCosts}
      </Card>
    </div>
  );
};

export default Costs;
