import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    background-color: white;
    margin: 0.5rem 0;
    padding: 1rem 2rem;
    border-radius: 0.25rem;

    width: 100%;
`;

export const FullLink = styled.p`
    margin-right: auto;
    max-width: 50%;
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;
    
    font-weight: ${props => props.theme.fontWeight.default};

    @media(max-width: 850px) {
        max-width: 75%;
        white-space: nowrap;
        overflow-x: hidden;
        text-overflow: ellipsis;
    }
`;

export const ShortLink = styled.a`
    padding: 0 1rem;
    color: ${props => props.theme.colors.primary.cyan};

    cursor: pointer;
    text-decoration: none;

    @media(max-width: 850px) {
        display: none;
    }
`;