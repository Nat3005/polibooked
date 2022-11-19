import styled from 'styled-components';

export const HomepageContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(9,1fr);
    column-gap: 1.25rem;
    background-color ${(props) => props.background};

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(8,1fr);
        grid-template-rows: 10vh auto 10vh;
        padding: 0rem 0rem;
    }

    @media screen and (max-width: 456px) {
        grid-template-columns: repeat(4,1fr);
    }
`;
