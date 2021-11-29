import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 2rem 0;
    width: 100%;
    background-color: ${props => props.theme.colors.primary.violet};

    button {
        filter: brightness(0.8);
    }
`;

export const Title = styled.h2`
    z-index: 1;
    font-size: ${props => props.theme.fontSize.large};
    color: white;

    padding: 0rem 0 1rem;

    @media(max-width: 850px) {
        text-align: center;
    }
`;