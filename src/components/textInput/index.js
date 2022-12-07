import React from 'react';
import {
  InputContainer,
  InputLabel,
  Input,
  TextAreaInput,
  MessageError
} from './TextInputElements';

function TextInput({
  label,
  type,
  name,
  placeholder,
  refs,
  onChange,
  variant,
  value,
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
          defaultValue={value}
          required
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
        min="0"
        onChange={onChange}
        placeholder={placeholder}
        variant={variant}
        defaultValue={value}
        required={true}
      />
    </InputContainer>
  );
}

export default TextInput;
