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

export const FacultyDataContainer = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  align-items: flex-start;
`;

export const FacultyCardContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 220px;
  padding 1rem;
  background: var(--white);
  border-right: var(-border-style-bold) var(--accent-purple);
  border-radius: var(--outer-radius);
  cursor: pointer;
  grid-column: ${(props) => handleGridColumn(props.id)};
  cursor: pointer;
  @media screen and (max-width: 768px) {
    grid-column: ${(props) => handleGridColumnMid(props.id)};
  }
  @media screen and (max-width: 456px) {
    grid-column: 1/5;
  }

  :hover {
    background-color: var(--accent-yellow);
    transition: var(--hover-transition);
    border-right: var(-border-style-bold) var(--white);

    ${FacultyIconContainer}{
      background-color: var(--white);
      color: var(--accent-yellow);
      transition: var(--hover-transition);
    }

    ${ArrowIconContainer}{
      color: var(--primary-dark);
      transition: var(--hover-transition);
      margin-left: 20px;
    }

  }
`;
