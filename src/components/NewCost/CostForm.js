import React, { useState } from "react";
import "./CostForm.css";

const CostForm = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");

  const nameChangeHandler = (event) => {
    setInputName(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setInputAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setInputDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const costData = {
      description: inputName,
      amount: inputAmount,
      date: new Date(inputDate),
    };

    props.onSaveCostData(costData);
    setInputName("");
    setInputAmount("");
    setInputDate("");
  };

  const hideShowForm = () => {
    props.onHideForm();
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="new-cost__controls">
          <div className="new-cost__control">
            <label>Название</label>
            <input type="text" value={inputName} onChange={nameChangeHandler} />
          </div>
          <div className="new-cost__control">
            <label>Сумма</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={inputAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-cost__control">
            <label>Дата</label>
            <input
              type="date"
              min="2019-01-01"
              max="2024-12-31"
              value={inputDate}
              onChange={dateChangeHandler}
            />
          </div>
          <div className="new-cost__actions">
            <button type="submit">Добавить Расход</button>
            <button type="button" onClick={hideShowForm}>
              Отменить
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default CostForm;
