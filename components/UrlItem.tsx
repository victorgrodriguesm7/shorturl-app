import Button from "./Button";
import { Url } from "../contexts/UrlContext";
import { Container, FullLink, ShortLink } from "../styles/components/url_item";

interface UrlItemProps {
    url: Url;
}

export default function UrlItem({ url }: UrlItemProps){
    const { originalLink, shortLink, isCopied } = url;
    return (
        <Container>
            <FullLink title={originalLink}>{ originalLink }</FullLink>
            <ShortLink href={shortLink} target="_blank">{ shortLink }</ShortLink>
            <Button active={isCopied} padding="0.5rem 1.5rem">
                { isCopied ? "Copied!" : "Copy" }
            </Button>
        </Container>
    )
}