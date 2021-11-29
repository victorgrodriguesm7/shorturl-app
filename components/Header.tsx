import Image from 'next/image';
import { useEffect, useState } from 'react';
import {
    Container,
    Hamburguer,
    ImageContainer,
    LeftSide,
    MenuItem,
    RightSide
} from '../styles/components/header';
import getSurface, { SurfaceType } from '../utils/getSurface';
import Button from './Button';

export default function Header(){
    const [ surfaceType, setSurfaceType ] = useState<SurfaceType>();

    useEffect(() => {
        if (typeof surfaceType === "undefined"){
            setSurfaceType(getSurface());
        }
    }, [surfaceType])
    
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