import React from 'react';
import {
  InputContainer,
  InputLabel,
  Input,
  TextAreaInput,
} from './TextInputElements';

function TextInput({
  label,
  type,
  name,
  placeholder,
  refs,
  onChange,
  variant,
}) {
  if (type === 'textarea') {
    return (
      <InputContainer>
        <InputLabel variant={variant}>{label}</InputLabel>
        <TextAreaInput
          ref={refs}
          onChange={onChange}
          name={name}
          placeholder={placeholder}
          variant={variant}
        />
      </InputContainer>
    );
  }

  return (
    <InputContainer>
      <InputLabel variant={variant}>{label}</InputLabel>
      <Input
        ref={refs}
        type={type}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        variant={variant}
      />
    </InputContainer>
  );
}

export default TextInput;
