import styled from "styled-components";

export const GridContainer = styled.footer`
    display: grid;
    grid-template-columns: 2fr repeat(3, 1fr) 2fr;
    gap: 2rem;

    width: 100%;
    height: max-content;
    padding: 2rem 10% 3rem;

    @media(max-width: 850px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        place-items: center;
    }
`;

export const LogoContainer = styled.div`
    position: relative;
    height: 1.5rem;
    width: 6rem;

    svg path {
        fill: white;
    }
`;

export const TopicContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media(max-width: 850px) {
        align-items: center;
    }
`;

export const SocialMediaContainer = styled.div`
    display: flex;
    justify-content: space-evenly;

    @media(max-width: 850px) {
        width: 100%;
    }
`;

export const TopicTitle = styled.h3`
    padding: 0.25rem 0 0.5rem;
    font-size: ${props => props.theme.fontSize.medium};

    color: white;
`;

export const TopicItem = styled.span`
    color: white;
    
    opacity: 0.6;
    font-size: ${props => props.theme.fontSize.small};
    padding: 0.25rem 0;
    width: fit-content;

    transition: color 0.2s ease;

    cursor: pointer;
    &:hover {
        color: ${props => props.theme.colors.primary.cyan};
    }
`;

export const SocialMediaIcon = styled.a`
    padding: 0.25rem 0 0;
    width: 1.5rem;
    height: 1.5rem;

    svg path {
        transition: all ease 0.3s;
    }

    &:hover {
        svg path {
            fill: ${props => props.theme.colors.primary.cyan};
        }
    }

    @media(max-width: 850px) {
        padding: 0;
    }
`;