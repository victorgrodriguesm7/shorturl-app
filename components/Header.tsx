import Image from 'next/image';
import useResponsive from '../hooks/useResponsive';
import {
    Container,
    Hamburguer,
    ImageContainer,
    LeftSide,
    MenuItem,
    RightSide
} from '../styles/components/header';
import Button from './Button';

export default function Header(){
    const surfaceType = useResponsive();
    
    if (surfaceType === "desktop"){
        return (
            <Container>
                <LeftSide>
                    <ImageContainer>
                        <Image
                            src="/assets/logo.svg"
                            alt="logo"
                            layout="fill"
                            />
                    </ImageContainer>
                    <MenuItem>Features</MenuItem>
                    <MenuItem>Pricing</MenuItem>
                    <MenuItem>Resources</MenuItem>
                </LeftSide>
                <RightSide>
                    <MenuItem>Login</MenuItem>
                    <Button>
                        Sign Up
                    </Button>
                </RightSide>
            </Container>
        );
    }

    return (
        <Container>
            <LeftSide>
                <ImageContainer>
                    <Image
                        src="/assets/logo.svg"
                        alt="logo"
                        layout="fill"
                        />
                </ImageContainer>
            </LeftSide>
            <RightSide>
                <Hamburguer/>
            </RightSide>
        </Container>
    )
}