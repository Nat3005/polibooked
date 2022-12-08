import styled from 'styled-components';

const handleColor = (variant) =>
  ({
    dark: 'var(--primary-dark)',
    light: 'var(--primary-light)',
    purpleAccent: 'var(--accent-purple)',
    yellowAccent: 'var(--accent-yellow)',
    purpleGreyish: 'transparent',
    yellowGreyish: 'transparent',
  }[variant]);

const handleFont = (variant) =>
  ({
    dark: 'var(--white)',
    light: 'var(--primary-dark)',
    purpleAccent: 'var(--white)',
    yellowAccent: 'var(--primary-dark)',
    purpleGreyish: 'var(--greyish-purple)',
    yellowGreyish: 'var(--greyish-yellow)',
  }[variant]);

export const Chip = styled.p`
  background-color: ${(props) => handleColor(props.variant)};
  color: ${(props) => handleFont(props.variant)};
  padding: 0.375rem;
  border-radius: var(--inner-radius);
  border: 0px;
  font-size: var(--basic-text);
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  word-break: keep-all;
`;
