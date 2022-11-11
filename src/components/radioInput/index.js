import {React, useState } from 'react'
import { RadioButtonsContainer, RadioInputContainer,Input,RadioContainerLabel, ButtonLabel, RadioButton, RangeContainer } from './RadioInputElements';
import TextInput from '../textInput';

function RadioInput({label, refs}) {
    const [selected, setSelected] = useState(0)
    const handleSelection = (s) => {
        setSelected(s);
        // refs = s;
    };

    const displayRange = () => {
        return(
            <RangeContainer>
                od<TextInput type="text" name="costFrom" placeholder={"np.: 10"} /> zł do <TextInput type="text" name="costTo" placeholder={"np.: 30"} /> zł
            </RangeContainer>
        )
    }

    const displayOther = () => {
        return(
        <TextInput type="text" name="costOther" placeholder={"np.: Pierwsze godzinne spotkanie jest bezpłatne. Koszt następnych to 25zł/h."} />
        )
    }

  return (
    <RadioInputContainer>
        <RadioContainerLabel variant="purpleAccent">{label}</RadioContainerLabel>
        <RadioButtonsContainer>
            <RadioButton>
                <input type="radio" value="free" name="cost" checked={selected === 0} onChange={(event) => handleSelection(0)}/>
                <label>bezpłatne</label>
            </RadioButton>
            <RadioButton>
                <input type="radio" value="range" name="cost" checked={selected === 1} onChange={(event) =>handleSelection(1)}/>
                <label>przedział</label>
            </RadioButton>
            <RadioButton>
                <input type="radio" value="other" name="cost" checked={selected === 2} onChange={(event) =>handleSelection(2)}/>
                <label>inne</label>
            </RadioButton>
        </RadioButtonsContainer>
        {selected === 1 && displayRange()}
        {selected === 2 && displayOther()}
    </RadioInputContainer>
  )
}

export default RadioInput;