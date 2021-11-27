import styled from "styled-components";

export type CustomButtonProps = {
    active: boolean;
    borderRadius: string;
    padding: string;
    fontSize: "xLarge" | "large" | "medium" | "small";
    margin: string;
    zIndex?: string;
}

export const CustomButton = styled.button<CustomButtonProps>`
    outline: 0;
    border: 0;
    width: fit-content;
    border-radius: ${props => props.borderRadius};
    padding: ${props => props.padding};
    background: ${props => props.active ? props.theme.colors.primary.violet : props.theme.colors.primary.cyan};
    font-size: ${props => props.theme.fontSize[props.fontSize]};
    margin: ${props => props.margin};
    color: white;
    cursor: pointer;
    ${props => props.zIndex != null ? `z-index: ${props.zIndex};` : ""}
    transition: all 0.2s ease;

    &:hover {
        filter: opacity(0.7);
    }

    &:active {
        filter: opacity(0.7) brightness(1.3);
    }
`;