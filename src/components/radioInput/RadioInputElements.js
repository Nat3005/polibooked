import styled from 'styled-components';

const handleColor = (variant) =>
  ({
    tutorNew: 'var(--accent-purple)',
    studentNew: 'var(--accent-yellow)',
    tutorEdit: 'var(--accent-purple)',
    studentEdit: 'var(--accent-yellow)',
  }[variant]);

export const RadioInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  row-gap: 0.5rem;
`;
export const RadioButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  color: var(--primary-dark);
`;
export const RadioContainerLabel = styled.p`
  color: ${(props) => handleColor(props.variant)};
  font-size: var(--basic-text);
  font-weight: var(--bold);
`;

export const RadioButton = styled.div`
  display: inline-block;
  > input {
    opacity: 1;
  }
  > input + label {
    color: ${(props) => handleColor(props.variant)};
    padding: 0.5rem;
    font-size: var(--basic-text);
  }
  > input:checked + label {
    color: ${(props) => handleColor(props.variant)};
    font-weight: var(--bold);
  }
`;

export const RangeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  font-size: var(--basic-text);
  color: var(--primary-dark);
  font-weight: var(--bold);
  align-self: center;
  width: 80%;

  @media screen and (max-width: 456px) {
    width: 100%;

    > div {
      max-width: 30vw;
    }
  }
`;
