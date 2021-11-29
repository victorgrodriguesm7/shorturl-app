import styled from "styled-components";

export const Container = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;

    align-items: center;
    padding: 0 10% 2rem;
`;

export const Title = styled.h2`
    padding: 0.5rem;
    font-size: ${props => props.theme.fontSize.large};
`;

export const Description = styled.span`
    width: 500px;
    text-align: center;
    font-size: ${props => props.theme.fontSize.medium};

    filter: opacity(0.5);
`;

export const CardContainer = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    padding: 2rem 0 0;
    justify-content: center;
    gap: 1.5rem;

    &::before {
        content: "";
        position: absolute;
        width: 95%;
        height: 0.5rem;

        top: 40%;
        transform: translateY(-50%);
        z-index: 0;

        background: ${props => props.theme.colors.primary.cyan};
        filter: brightness(0.85);
    }
`;

interface CardProps {
    index: number;
}

export const Card = styled.div<CardProps>`
    position: relative;
    flex: 1;
    margin-top: ${props => `${props.index * 2}rem`};
    background: white;
    border-radius: 0.4rem;
    padding: 2rem 1rem;
    height: fit-content;
    margin-bottom: 5rem;
`;

export const IconContainer = styled.div`
    position: absolute;
    top: 0;
    transform: translateY(-50%);
    width: 4rem;
    height: 4rem;
    padding: 0.8rem;
    background: ${props => props.theme.colors.neutral.darkBlue};
    border-radius: 50%;

    div {
        position: relative;
        width: 100%;
        height: 100%;
        border: 0.25rem solid transparent;
        filter: opacity(0.7);
    }
`;

export const CardTitle = styled.h4`
    font-weight: ${props => props.theme.fontWeight.bold};
    font-size: 1.25rem;
    padding: 1rem 0;
`;

export const CardDescription = styled.p`
    filter: opacity(0.525);
    font-size: 0.9em;
`;