import Image from 'next/image';

import { Card, CardContainer, CardDescription, CardTitle, Container, Description, IconContainer, Title } from "../styles/components/details";
const cardsContent = [
    {
        icon: "/assets/icon-brand-recognition.svg",
        title: "Brand Recognition",
        description: "Boost your brand recognition with each link. Generic links don't mean a thing. Branded links help instill confidence in your content."
    },
    {
        icon: "/assets/icon-detailed-records.svg",
        title: "Details Records",
        description: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
    },
    {
        icon: "/assets/icon-fully-customizable.svg",
        title: "Fully Customizable",
        description: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
    }
]

export default function Details(){
    return (
        <Container>
            <Title>Advanced Statistics</Title>
            <Description>track how your links are performing across the web with our advanced statistics dashboard</Description>
            <CardContainer>
                {
                    cardsContent.map((cardContent, index) => {
                        return (
                            <Card key={index} index={index}>
                                <IconContainer>
                                    <div>
                                        <Image
                                            src={cardContent.icon}
                                            alt="Card icon"
                                            layout="fill"/>
                                    </div>
                                </IconContainer>
                                <CardTitle>{cardContent.title}</CardTitle>
                                <CardDescription>{cardContent.description}</CardDescription>
                            </Card>
                        )
                    })
                }
            </CardContainer>
        </Container>
    )
}