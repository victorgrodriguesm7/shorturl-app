import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 3rem;
    padding: 0 10%;
`;

export const ImageContainer = styled.div`
    position: relative;
    width: 6rem;
    height: 1.75rem;
`;

export const LeftSide = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-right: auto;
    height: 100%;
`;

export const RightSide = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-left: auto;
    height: 100%;
`;

export const MenuItem = styled.a`
    padding: 0 2rem;
    text-decoration: none;
    font-weight: ${props => props.theme.fontWeight.bold};
    cursor: pointer;
    filter: opacity(0.3);
    transition: all 0.2s ease;

    &:hover {
        filter: opacity(1);
    }
`;