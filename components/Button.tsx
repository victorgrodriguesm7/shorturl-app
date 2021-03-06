import { CustomButton } from "../styles/components/button";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    active?: boolean;
    borderRadius?: string;
    padding?: string;
    fontSize?: "xLarge" | "large" | "medium" | "small";
    margin?: string;
    zIndex?: string;
}

export default function Button({ 
    children, 
    active=false, 
    borderRadius='0.5rem', 
    padding="0.25rem 0.5rem",
    fontSize="medium",
    margin="0",
    zIndex,
    ...rest}: ButtonProps){
    return (
        <CustomButton active={active} borderRadius={borderRadius} padding={padding} fontSize={fontSize} margin={margin} zIndex={zIndex} {...rest}>
            { children }
        </CustomButton>
    )
}