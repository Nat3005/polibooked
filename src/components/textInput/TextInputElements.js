import styled from 'styled-components'

const handleColor = (variant) =>
  ({
    dark: 'var(--primary-dark)',
    light: 'var--primary-light)',
    purpleAccent: 'var(--accent-purple)',
    yellowAccent: 'var(--accent-yellow)',
  }[variant]);

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    row-gap: 0.5rem;
`
export const InputLabel = styled.label`
    color: ${(props) => handleColor(props.variant)};
    font-size: var(--basic-text);
    font-weight: var(--bold);
`

export const Input = styled.input`
background: var(--neutral-purple);
border: 1px solid var(--accent-purple);
border-radius: var(--inner-radius);
color: var(--primary-dark);
padding: 0.5rem;

&:focus{
  outline: none;
  border: 2px solid var(--accent-purple);
  transition: all 0.3s ease-in-out;

}

::placeholder{
  color: var(--greyish-purple);
}

`
export const TextAreaInput = styled.textarea`
background: var(--neutral-purple);
border: 1px solid var(--accent-purple);
border-radius: var(--inner-radius);
color: var(--primary-dark);
padding: 0.5rem;
height: auto;
min-height: 140px;

&:focus{
  outline: none;
  border: 2px solid var(--accent-purple);
  transition: all 0.3s ease-in-out;

}

::placeholder{
  color: var(--greyish-purple);
}

`