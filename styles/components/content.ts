import styled from 'styled-components';

export const MainContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-content: center;
    margin-top: 3rem;
    padding: 0 0 8rem 10%;

    @media(max-width: 850px) {
        padding: 0 0 6rem;
        grid-template-columns: 1fr;
        grid-template-rows: 0.5fr 0.5fr;
        margin-top: 0;

        button {
            margin: 0 auto;
        }
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2rem;


    @media(max-width: 850px) {
        margin-top: 0.5rem;
        order: 1;
    }
`;

export const Title = styled.h1`
    font-size: ${props => props.theme.fontSize.xLarge};
    font-weight: ${props => props.theme.fontWeight.bold};

    @media(max-width: 850px) {
        line-height: ${props => props.theme.fontSize.large};
        font-size: ${props => props.theme.fontSize.large};
        text-align: center;
    }
`;

export const Subtitle = styled.p`
    font-size: 1.1rem;
    filter: opacity(0.5);

    @media(max-width: 850px) {
        margin: 1rem 0;
        text-align: center;
    }
`;

export const ImageContainer = styled.div`
    position: relative;
    margin-left: 4rem;
    height: 22rem;

    @media(max-width: 850px) {
        margin-left: 2rem;
    }
`;