import styled from 'styled-components';

const handleColor = (variant) =>
  ({
    tutor: 'var(--accent-purple)',
    student: 'var(--accent-yellow)',
  }[variant]);

const handleBackground = (variant) =>
  ({
    tutor: 'var(--neutral-purple)',
    student: 'var(--neutral-yellow)',
  }[variant]);

const handleCopyColor = (variant) =>
  ({
    tutor: 'var(--greyish-purple)',
    student: 'var(--greyish-yellow)',
  }[variant]);

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  row-gap: 0.5rem;
  width: 100%;
`;
export const InputLabel = styled.label`
  color: ${(props) => handleColor(props.variant)};
  font-size: var(--basic-text);
  font-weight: var(--bold);
`;

export const Input = styled.input`
  background: ${(props) => handleBackground(props.variant)};
  border: 1px solid ${(props) => handleColor(props.variant)};
  border-radius: var(--inner-radius);
  color: var(--primary-dark);
  padding: 0.5rem;

  &:focus {
    outline: none;
    border: 2px solid ${(props) => handleColor(props.variant)};
    transition: all 0.3s ease-in-out;
  }

  ::placeholder {
    color: ${(props) => handleCopyColor(props.variant)};
  }
`;
export const TextAreaInput = styled.textarea`
  background: ${(props) => handleBackground(props.variant)};
  border: 1px solid ${(props) => handleColor(props.variant)};
  border-radius: var(--inner-radius);
  color: var(--primary-dark);
  padding: 0.5rem;
  height: auto;
  min-height: 140px;

  &:focus {
    outline: none;
    border: 2px solid ${(props) => handleColor(props.variant)};
    transition: all 0.3s ease-in-out;
  }

  ::placeholder {
    color: ${(props) => handleCopyColor(props.variant)};
  }
`;
