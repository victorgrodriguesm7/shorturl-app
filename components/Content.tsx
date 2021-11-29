import Image from 'next/image';
import useResponsive from '../hooks/useResponsive';
import {
    MainContainer,
    Container,
    Title,
    Subtitle,
    ImageContainer
} from '../styles/components/content';
import Button from './Button';

export default function Content(){
    return (
        <MainContainer>
            <Container>
                <Title>More than just shorter links</Title>
                <Subtitle>Build your brand&apos;s recognition and get detailed insights on how your links are performing.</Subtitle>
                <Button 
                    fontSize={"medium"}
                    borderRadius={'3rem'}
                    padding={"0.75rem 1.75rem"}
                    margin={"1rem 0 0"}>
                    Get Started
                </Button>
            </Container>
            <ImageContainer>
                <Image
                    src="/assets/illustration-working.svg"
                    alt="Working Illustration"
                    layout="fill"
                    />
            </ImageContainer>
        </MainContainer>
    )
}