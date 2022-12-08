import { React, useState, useRef } from 'react';
import {
  RadioButtonsContainer,
  RadioInputContainer,
  RadioContainerLabel,
  RadioButton,
  RangeContainer,
} from './RadioInputElements';
import TextInput from '../textInput';

function RadioInput({ label, refs, placeholder, variant }) {
  const [selected, setSelected] = useState(0);
  const [costOtherRef, costFromRef, costToRef] = [
    useRef(''),
    useRef(''),
    useRef(''),
  ];

  refs([]);
  const handleInsert = () => {
    const selection = [];
    if (costFromRef.current?.value) selection.push(costFromRef.current.value);
    if (costToRef.current?.value) selection.push(costToRef.current.value);
    if (costOtherRef.current?.value) selection.push(costOtherRef.current.value);

    refs(selection);
  };

  const handleSelection = (s) => {
    setSelected(s);
  };

  const displayRange = () => (
    <RangeContainer>
      od
      <TextInput
        refs={(ref) => {
          costFromRef.current = ref;
        }}
        type="number"
        name="costFrom"
        placeholder="np.: 10"
        onChange={handleInsert}
        variant={variant}
      />{' '}
      zł do
      <TextInput
        refs={(ref) => {
          costToRef.current = ref;
        }}
        type="number"
        name="costTo"
        placeholder="np.: 30"
        onChange={handleInsert}
        variant={variant}
      />{' '}
      zł
    </RangeContainer>
  );

  const displayOther = () => (
    <TextInput
      refs={(ref) => {
        costOtherRef.current = ref;
      }}
      type="text"
      name="costOther"
      placeholder={placeholder}
      variant={variant}
      onChange={handleInsert}
    />
  );

  return (
    <RadioInputContainer>
      <RadioContainerLabel variant={variant}>{label}</RadioContainerLabel>
      <RadioButtonsContainer>
        <RadioButton>
          <label htmlFor="cost">
            <input
              id="one"
              type="radio"
              value="free"
              name="cost"
              checked={selected === 0}
              onChange={() => handleSelection(0)}
            />
            bezpłatne
          </label>
        </RadioButton>
        <RadioButton>
          <label htmlFor="two">
            <input
              id="two"
              type="radio"
              value="range"
              name="cost2"
              checked={selected === 1}
              onChange={() => handleSelection(1)}
            />
            przedział
          </label>
        </RadioButton>
        <RadioButton>
          <label htmlFor="free">
            <input
              id="free"
              type="radio"
              value="other"
              name="cost3"
              checked={selected === 2}
              onChange={() => handleSelection(2)}
            />
            inne
          </label>
        </RadioButton>
      </RadioButtonsContainer>
      {selected === 1 && displayRange()}
      {selected === 2 && displayOther()}
    </RadioInputContainer>
  );
}

export default RadioInput;
