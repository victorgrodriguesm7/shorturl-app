import Image from 'next/image';
import Button from './Button';
import { Container, Title } from "../styles/components/get_started";

export default function GetStarted(){
    return (
        <Container>
            <Image
                src="/assets/bg-boost-desktop.svg"
                alt="Boost Desktop Background"
                layout="fill"/>
            <Title>Boost your links today</Title>
            <Button
                zIndex="1"
                padding="0.5rem 2rem"
                borderRadius="2rem">
                Get Started
            </Button>
        </Container>
    )
}