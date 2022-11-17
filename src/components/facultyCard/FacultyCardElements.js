import styled from 'styled-components';

const handleGridColumn = (id) => {
    if (parseInt(id, 10) % 2 !== 0) {
      return '2/5';
    }
    
    return '6/9';
};

const handleGridColumnMid = (id) => {
    if (parseInt(id, 10) % 2 !== 0) {
      return '1/5';
    }
    return '5/9';
  };

export const FacultyCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 220px;
    align-items: center;
    justify-content: center;
    background: var(--white);
    grid-column: ${(props) => handleGridColumn(props.id)};
        @media screen and (max-width: 768px) {
        grid-column: ${(props) => handleGridColumnMid(props.id)};
    }
    @media screen and (max-width: 456px) {
        grid-column: 1/5;
    }
`
export const DataContainer = styled.div`
    display: flex;
    flex-direction: row;
    row-gap: 0.5rem;
    margin-left: 20px;
   align-items: space-between;
   justify-content: center;
`
export const FacultyIconContainer = styled.div`
    background-color: var(--accent-purple);
    padding: 0.75rem;
    border-radius: 100%;
    border: none;
    color: var(--white);
    width: 50px;
    height: 50px;
`
export const ArrowIconContainer = styled.div`
    background-color: var(--white);
    border: 1px solid var(--accent-purple);
    padding: 0.75rem;
    border-radius: 100%;
    color: var(--accent-purple);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
`

export const FacultyDataContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;

`