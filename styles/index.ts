import styled from "styled-components";

export const Main = styled.main`
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    background: #fff;
`;

export const DetailsContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    background: ${props => props.theme.colors.neutral.gray};
    filter: brightness(1.25);
`;