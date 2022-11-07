import styled from 'styled-components';

const handleColor = (variant) =>
  ({
    dark: 'var(--primary-dark)',
    light: 'var--primary-light)',
    purpleAccent: 'var(--accent-purple)',
    yellowAccent: 'var(--accent-yellow)',
  }[variant]);

const handleFont = (variant) =>
  ({
    dark: 'var(--white)',
    light: 'var(--primary-dark)',
    purpleAccent: 'var(--white)',
    yellowAccent: 'var(--primary-dark)',
  }[variant]);

export const PrimaryButton = styled.button`
  background-color: ${(props) => handleColor(props.variant)};
  color: ${(props) => handleFont(props.variant)};
  padding: 1rem 2rem;
  border-radius: var(--outer-radius);
  border: none;
  cursor: pointer;
  font-size: var(--basic-tex);
  max-height: 55px;
  @media screen and (max-width: 768px) {
    font-size: var(--small-text);
  }

  :hover {
    background-color: var(--accent-purple);
    color: var(--white);
    transition: all 0.2s ease-in-out;
  }
`;

export const SecondaryButton = styled.button`
  background-color: transparent;
  color: ${(props) => handleColor(props.variant)};
  padding: 1rem 2rem;
  border-radius: var(--outer-radius);
  border: var(--button-style);
  border-color: ${(props) => handleColor(props.variant)};
  cursor: pointer;
  font-size: var(--basic-tex);
  @media screen and (max-width: 768px) {
    font-size: var(--small-text);
  }
`;

export const TertiaryButton = styled.button`
  background-color: transparent;
  color: ${(props) => handleColor(props.variant)};
  padding: 1rem 2rem;
  cursor: pointer;
  border: none;
  font-size: var(--basic-tex);
  @media screen and (max-width: 768px) {
    font-size: var(--small-text);
  }
`;
