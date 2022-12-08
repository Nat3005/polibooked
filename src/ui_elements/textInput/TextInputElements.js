import styled from 'styled-components';

const handleColor = (variant) =>
  ({
    tutorNew: 'var(--accent-purple)',
    studentNew: 'var(--accent-yellow)',
    tutorEdit: 'var(--accent-purple)',
    studentEdit: 'var(--accent-yellow)',
    userEvent: 'var(--accent-purple)',
  }[variant]);

const handleBackground = (variant) =>
  ({
    tutorNew: 'var(--neutral-purple)',
    studentNew: 'var(--neutral-yellow)',
    tutorEdit: 'var(--neutral-purple)',
    studentEdit: 'var(--neutral-yellow)',
    userEvent: 'var(--neutral-purple)',
  }[variant]);

const handleCopyColor = (variant) =>
  ({
    tutorNew: 'var(--greyish-purple)',
    studentNew: 'var(--greyish-yellow)',
    tutorEdit: 'var(--greyish-purple)',
    studentEdit: 'var(--greyish-yellow)',
    userEvent: 'var(--greyish-purple)',
  }[variant]);

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  row-gap: 0.5rem;
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
