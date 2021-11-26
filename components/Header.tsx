import Image from 'next/image';
import {
    Container,
    ImageContainer,
    LeftSide,
    MenuItem,
    RightSide
} from '../styles/components/header';
import Button from './Button';

export default function Header(){
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
    )
}