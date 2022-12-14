import styled from 'styled-components';

export const HomepageContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(9,1fr);
    column-gap: 1.25rem;
    padding: 1.25rem;
    grid-row-gap: 1.25rem;
    background-color ${(props) => props.background};

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(8,1fr);
    }

    @media screen and (max-width: 456px) {
        grid-template-columns: repeat(4,1fr);
    }
`;
