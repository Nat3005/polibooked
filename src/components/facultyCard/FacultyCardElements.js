import styled from 'styled-components';

const handleGridColumn = (id) => {
  if (parseInt(id, 10) % 3 === 1) {
    return '1/4';
  }

  if (parseInt(id, 10) % 3 === 2) {
    return '4/7';
  }

  return '7/10';
};

const handleGridColumnMid = (id) => {
  if (parseInt(id, 10) % 2 !== 0) {
    return '1/5';
  }
  return '5/9';
};

export const FacultyIconContainer = styled.div`
  background-color: var(--accent-purple);
  padding: 0.75rem;
  border-radius: 100%;
  border: none;
  color: var(--white);
  width: 50px;
  height: 50px;
  cursor: pointer;
`;
export const ArrowIconContainer = styled.div`
  color: var(--accent-purple);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const FacultyDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  align-items: flex-start;
`;

export const FacultyCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 220px;
  align-items: flex-start;
  padding 1rem;
  background: var(--white);
  justify-content: center;
  border-right: 2px solid var(--accent-purple);
  border-radius: var(--outer-radius);
  cursor: pointer;
  grid-column: ${(props) => handleGridColumn(props.id)};
  cursor: poitnter;
  @media screen and (max-width: 768px) {
    grid-column: ${(props) => handleGridColumnMid(props.id)};
  }
  @media screen and (max-width: 456px) {
    grid-column: 1/5;
    transition: all 1s ease-in-out;
  }

  :hover {
    background-color: var(--accent-yellow);
    transition: all 0.2s ease-in-out;
    border-right: 2px solid var(--white);

    ${FacultyIconContainer}{
      background-color: var(--white);
      color: var(--accent-yellow);
      transition: all 0.2s ease-in-out;
    }
  
    ${ArrowIconContainer}{
      color: var(--primary-dark);
      transition: all 0.2s ease-in-out;
      margin-left: 20px;
    }
    
  }
`;