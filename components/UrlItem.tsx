import Button from "./Button";
import { Url, useUrl } from "../contexts/UrlContext";
import { Container, FullLink, ShortLink } from "../styles/components/url_item";
import { useState } from "react";

interface UrlItemProps {
    url: Url;
    index: number;
}

export default function UrlItem({ url, index }: UrlItemProps){
    const { copyUrl } = useUrl();
    const { originalLink, shortLink } = url;
    const [ isCopied, setIsCopied ] = useState(url.isCopied);
    
    function handleCopy(event: React.MouseEvent<HTMLButtonElement>){
        event.preventDefault();
        
        copyUrl(index);

        setIsCopied(true)
    }

    return (
        <Container>
            <FullLink title={originalLink}>{ originalLink }</FullLink>
            <ShortLink href={shortLink} target="_blank">{ shortLink }</ShortLink>
            <Button active={isCopied} padding="0.5rem 1.5rem" onClick={handleCopy}>
                { isCopied ? "Copied!" : "Copy" }
            </Button>
        </Container>
    )
}