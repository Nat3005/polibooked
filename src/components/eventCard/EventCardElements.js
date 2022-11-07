import styled from "styled-components";

export const EventCardContainer = styled.div`
    background-color: ${(props) =>
    props.variant === 'tutoring' ? 'var(--neutral-purple)' : 'var(--neutral-yellow)'};
    border-left: 2px solid;
    border-color: ${(props) =>
    props.variant === 'tutoring' ? 'var(--accent-purple)' : 'var(--accent-yellow)'};
    border-radius: 0px var(--outer-radius) var(--outer-radius) 0px;
    padding: 0.5rem;
    display: flex;
    row-gap: 0.75rem;
    flex-direction: column;

`

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;    
    column-gap: 0.4rem;
    justify-content: center;
`

export const TagContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    font-size: var(--basic-text);
    color: ${(props) =>
    props.variant === 'tutoring' ? 'var(--greyish-purple)' : 'var(--greyish-yellow)'};
`