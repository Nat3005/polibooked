import { React, useState, useRef } from "react";
import {
  RadioButtonsContainer,
  RadioInputContainer,
  Input,
  RadioContainerLabel,
  ButtonLabel,
  RadioButton,
  RangeContainer,
} from "./RadioInputElements";
import TextInput from "../textInput";

function RadioInput({ label, refs }) {
  const [selected, setSelected] = useState(0);
  const [costOtherRef, costFromRef, costToRef] = [
    useRef(""),
    useRef(""),
    useRef(""),
  ];

  const handleInsert = () => {
    const selection = [];
    if (costFromRef.current?.value) selection.push(costFromRef.current.value);
    if (costToRef.current?.value) selection.push(costToRef.current.value);
    if (costOtherRef.current?.value) selection.push(costOtherRef.current.value);
    // console.log(selection);
    refs(selection);
  }

  const handleSelection = (s) => {
    setSelected(s);
  };

  const displayRange = () => {
    return (
      <RangeContainer>
        od
        <TextInput
          refs={(ref) => (costFromRef.current = ref)}
          type="text"
          name="costFrom"
          placeholder={"np.: 10"}
          onChange={handleInsert}
        />{" "}
        zł do
        <TextInput
          refs={(ref) => (costToRef.current = ref)}
          type="text"
          name="costTo"
          placeholder={"np.: 30"}
          onChange={handleInsert}
        />{" "}
        zł
      </RangeContainer>
    );
  };

  const displayOther = () => {
    return (
      <TextInput
        refs={(ref) => (costOtherRef.current = ref)}
        type="text"
        name="costOther"
        placeholder={
          "np.: Pierwsze godzinne spotkanie jest bezpłatne. Koszt następnych to 25zł/h."
        }
        onChange={handleInsert}
      />
    );
  };

  return (
    <RadioInputContainer>
      <RadioContainerLabel variant="purpleAccent">{label}</RadioContainerLabel>
      <RadioButtonsContainer>
        <RadioButton>
          <input
            type="radio"
            value="free"
            name="cost"
            checked={selected === 0}
            onChange={() => handleSelection(0)}
          />
          <label>bezpłatne</label>
        </RadioButton>
        <RadioButton>
          <input
            type="radio"
            value="range"
            name="cost"
            checked={selected === 1}
            onChange={() => handleSelection(1)}
          />
          <label>przedział</label>
        </RadioButton>
        <RadioButton>
          <input
            type="radio"
            value="other"
            name="cost"
            checked={selected === 2}
            onChange={() => handleSelection(2)}
          />
          <label>inne</label>
        </RadioButton>
      </RadioButtonsContainer>
      {selected === 1 && displayRange()}
      {selected === 2 && displayOther()}
    </RadioInputContainer>
  );
}

export default RadioInput;
