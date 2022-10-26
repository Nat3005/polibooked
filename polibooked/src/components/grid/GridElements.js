import styled from "styled-components";

export const GridContainer =  styled.div`
    display: grid;
    grid-template-columns: repeat(12,1fr);
    column-gap: 1.25rem;
    padding: 0rem 1.875rem;
    background-color ${(props) => props.background};

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(8,1fr);
    }

    @media screen and (max-width: 456px) {
        grid-template-columns: repeat(4,1fr);
    }

`