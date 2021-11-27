import styled from 'styled-components';

export const MainContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-content: center;
    margin-top: 3rem;
    padding: 0 0 8rem 10%;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
`;

export const Title = styled.h1`
    font-size: ${props => props.theme.fontSize.xLarge};
    font-weight: ${props => props.theme.fontWeight.bold};
`;

export const Subtitle = styled.p`
    font-size: 1.1rem;
    filter: opacity(0.5);
`;

export const ImageContainer = styled.div`
    position: relative;
    margin-left: 4rem;
    height: 22rem;
`;