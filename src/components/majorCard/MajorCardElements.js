import styled from 'styled-components';
import { MediumText } from '../text/TextElements';
const handleColor = (variant) =>
  ({
    first: 'var(--accent-yellow)',
    second: 'var(--primary-dark)',
  }[variant]);

  const handleHoverFont = (variant) =>
  ({
    first: 'var(--primary-dark)',
    second: 'var(--white)',
  }[variant]);
  
export const GradeContainer = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 1rem;
`
export const ArrowButtonContainer = styled.div`
    width: 40px;
    height: 40px;
    color: ${(props) => handleColor(props.variant)};
    border: 1px solid ${(props) => handleColor(props.variant)};
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const MajorCardContainer = styled.div`
    background: var(--white);
    border-radius: var(--outer-radius);
    border-left: 2px solid ${(props) => handleColor(props.variant)};
    display: flex;
    flex-diection: row;
    justify-content: space-between;
    padding: 1rem;
    align-items: center;
    column-gap: 1rem;

    @media screen and (max-width: 456px) {
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        row-gap: 0.5rem;
  }

  :hover {
    background: ${(props) => handleColor(props.variant)};
    border-color: var(--white);
    transition: all 0.3s ease-in-out;

    ${MediumText}{
      color: ${(props) => handleHoverFont(props.variant)};
      transition: all 0.3s ease-in-out;
    }

    ${ArrowButtonContainer}{
        background-color: transparent;
        color:var(--white);
        transition: all 0.3s ease-in-out;
        margin-right: 10px;
    }
  }

`   