import React from 'react'
import { InputContainer, InputLabel,Input, TextAreaInput } from './TextInputElements'

function TextInput({label,type,name,placeholder, refs}) {

  if(type === 'textarea'){
    return (
      <InputContainer>
      <InputLabel variant="purpleAccent" >{label}</InputLabel>
      <TextAreaInput ref={refs} name={name} placeholder={placeholder}/>
    </InputContainer>
    )
  }

  return (
    <InputContainer>
      <InputLabel variant="purpleAccent" >{label}</InputLabel>
      <Input ref={refs} type={type} name={name} placeholder={placeholder}></Input>
    </InputContainer>
  )
}

export default TextInput