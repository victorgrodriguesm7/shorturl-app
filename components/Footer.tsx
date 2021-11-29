import { GridContainer, LogoContainer, SocialMediaContainer, TopicContainer, TopicTitle, TopicItem, SocialMediaIcon } from "../styles/components/footer";

import FacebookIcon from '../public/assets/icon-facebook.svg';
import TwitterIcon from '../public/assets/icon-twitter.svg';
import PinterestIcon from '../public/assets/icon-pinterest.svg';
import InstagramIcon from '../public/assets/icon-instagram.svg';

import Logo from '../public/assets/logo.svg';

const socialMedias = [
    {
        url: "",
        icon: FacebookIcon
    },
    {
        url: "",
        icon: TwitterIcon
    },
    {
        url: "",
        icon: PinterestIcon
    },
    {
        url: "",
        icon: InstagramIcon
    }
];

export default function Footer(){
    return (
        <GridContainer>
            <LogoContainer>
                <Logo/>
            </LogoContainer>
            <TopicContainer>
                <TopicTitle>Features</TopicTitle>
                <TopicItem>Link Shortening</TopicItem>
                <TopicItem>Branded Links</TopicItem>
                <TopicItem>Analytics</TopicItem>
            </TopicContainer>
            <TopicContainer>
                <TopicTitle>Resources</TopicTitle>
                <TopicItem>Blog</TopicItem>
                <TopicItem>Developers</TopicItem>
                <TopicItem>Support</TopicItem>
            </TopicContainer>
            <TopicContainer>
                <TopicTitle>Company</TopicTitle>
                <TopicItem>About</TopicItem>
                <TopicItem>Our Team</TopicItem>
                <TopicItem>Careers</TopicItem>
                <TopicItem>Contact</TopicItem>
            </TopicContainer>
            <SocialMediaContainer>
                {
                    socialMedias.map((media, index) => {
                        return (
                            <SocialMediaIcon key={index} href={media.url}>
                                <media.icon/>
                            </SocialMediaIcon>
                        )
                    })
                }
            </SocialMediaContainer>
        </GridContainer>
    )
}