import styled from 'styled-components';

const handleColor = (variant) =>
  ({
    dark: 'var(--primary-dark)',
    light: 'var(--primary-light)',
    purpleAccent: 'var(--accent-purple)',
    yellowAccent: 'var(--accent-yellow)',
  }[variant]);

const handleHoverColor = (variant) =>
  ({
    dark: 'var(--primary-light))',
    light: 'var(--primary-dark)',
    purpleAccent: 'var(--accent-yellow)',
    yellowAccent: 'var(--accent-purple)',
  }[variant]);

const handleFont = (variant) =>
  ({
    dark: 'var(--white)',
    light: 'var(--primary-dark)',
    purpleAccent: 'var(--white)',
    yellowAccent: 'var(--primary-dark)',
  }[variant]);

const handleHoverFont = (variant) =>
  ({
    dark: 'var(--primary-dark)',
    light: 'var(--white)',
    purpleAccent: 'var(--primary-dark)',
    yellowAccent: 'var(--white)',
  }[variant]);

export const PrimaryButton = styled.button`
  background-color: ${(props) => handleColor(props.variant)};
  color: ${(props) => handleFont(props.variant)};
  padding: 1rem 1.5rem;
  border-radius: var(--outer-radius);
  border: none;
  cursor: pointer;
  font-size: var(--basic-tex);
  align-items: center;
  display: flex;
  column-gap: 0.5rem;
  max-height: 55px;
  @media screen and (max-width: 768px) {
    font-size: var(--small-text);
  }

  :hover {
    background-color: ${(props) => handleHoverColor(props.variant)};
    color: ${(props) => handleHoverFont(props.variant)};
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

  :hover {
    font-weight: var(--bold);
    transition: all 0.2s ease-in-out;
  }
`;
