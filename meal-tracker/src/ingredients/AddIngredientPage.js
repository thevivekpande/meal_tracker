import React, { useState } from "react";
import { BackButton, DropDown } from "../ui";
import { useNavigate } from "react-router-dom";

const unitOptions = ["pounds", "cups", "tableSpoons", "teaSpoons", "count"];

export const AddIngredientPage = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [units, setUnits] = useState(unitOptions[0]);
  const navigate = useNavigate();

  const AddToIngredients = async () => {
    const newIngredient = {
      name: name.toLowerCase(),
      amount,
      units,
    };
    await fetch("/ingredients", {
      method: "post",
      body: JSON.stringify(newIngredient),
      headers: {
        "Content-Type": "application/json",
      },
    });

    alert("successfully added!");

    navigate("/");
  };

  return (
    <div className="page">
      <BackButton className="left-action" />
      <div className="centered-container">
        <h1>Add Ingredients</h1>
        <input
          type="text"
          placeholder="Enter ingredient name here"
          className="space-after space-before full-width"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          className="space-befire full-width"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <DropDown
          className="space-before full-width"
          value={units}
          onChange={(e) => setUnits(e.target.value)}
          options={unitOptions}
        />
        <button className="space-before full-width" onClick={AddToIngredients}>
          Add
        </button>
      </div>
    </div>
  );
};
