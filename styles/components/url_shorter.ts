import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    padding: 0 10%;
`;

export const Form = styled.form`
    position: relative;
    display: flex;
    width: 100%;
    gap: 1rem;
    padding: 2rem 2rem;
    height: 7rem;

    transform: translateY(-50%);
    margin-bottom: -2rem;

    border-radius: 0.25rem;

    background: ${props => props.theme.colors.neutral.darkBlue};
    overflow: clip;
`;

type TextFieldContainerProps  = {
    error: string | null;
};

export const TextFieldContainer = styled.div<TextFieldContainerProps>`
    z-index: 1;
    height: 100%;
    flex: 1;
    position: relative;
    display: flex;

    border: 1px solid ${({ theme, error}) => error ? theme.colors.secondary : "transparent" };
    border-radius: 0.35rem;

    &:after {
        position: absolute;
        bottom: 0;
        left: 0;
        transform: translateY(1.35rem);
        ${props => props.error != null ? `content: '${props.error}';` : ''}
        color: ${props => props.theme.colors.secondary};
        font-size: ${props => props.theme.fontSize.small};
    }

    input::placeholder{
        color: ${({ theme, error }) => error ? theme.colors.secondary : "black"};
    }
`;

export const TextField = styled.input`
    flex: 1;
    padding-left: 1.5rem;
    font-size: 1.25rem;
    outline: 0;
    border: 0;
    border-radius: 0.25rem;
`;