import styled from 'styled-components';

const handleColor = (variant) =>
  ({
    dark: 'var(--primary-dark)',
    light: 'var--primary-light)',
    purpleAccent: 'var(--accent-purple)',
    yellowAccent: 'var(--accent-yellow)',
  }[variant]);

const handleAlignment = (variant) =>
  ({
    center: 'center',
    left: 'left',
    justify: 'justify',
  }[variant]);

const paragraph = styled.p`
  line-height: 25px;
  color: ${(props) => handleColor(props.variant)};
  text-align: ${(props) => handleAlignment(props.alignment)};
  font-weight: ${(props) =>
    props.weight === 'bold' ? 'var(--bold)' : 'var(--regular)'};
`;

export const SmallText = styled(paragraph)`
  font-size: var(--basic-text);
`;
export const MediumText = styled(paragraph)`
  font-size: var(--medium-text);
`;
export const LargeText = styled(paragraph)`
  font-size: var(--large-text);

  @media screen and (max-width: 768px) {
    font-size: var(--medium-text);
  }
`;
