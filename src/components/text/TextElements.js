import styled from 'styled-components';

const handleColor = (variant) =>
  ({
    dark: 'var(--primary-dark)',
    light: 'var--primary-light)',
    purpleAccent: 'var(--accent-purple)',
    yellowAccent: 'var(--accent-yellow)',
  }[variant]);

const paragraph = styled.p`
    color: ${(props) => handleColor(props.variant)};
    text-align: ${(props) =>
        props.alignment === 'centered' ? 'center' : 'left'};
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
`;
