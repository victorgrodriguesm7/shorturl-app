import React from "react";
import Image from "next/image";
import Button from "./Button";
import { Container, Form, TextField, TextFieldContainer } from "../styles/components/url_shorter";
import validateUrl from "../utils/validateUrl";
import ApiService from "../services/api";
import { AxiosHttpClient } from "../services/http_client";
import { useUrl, Url } from "../contexts/UrlContext";
import UrlItem from "./UrlItem";
import useResponsive from "../hooks/useResponsive";

const apiService = new ApiService(new AxiosHttpClient());
export default function UrlShorter(){
    const surfaceType = useResponsive();
    const { urls, addUrl } = useUrl();
    const [ error, setError ] = React.useState<string | null>(null);
    const linkRef = React.useRef<HTMLInputElement>() as React.MutableRefObject<HTMLInputElement>;

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();

        if (linkRef.current?.value){
            let linkValue = linkRef.current.value;

            if (linkValue.length){
                if (validateUrl(linkValue)){
                    let url = new URL(linkValue);

                    linkValue = linkValue.substr(url.protocol.length + 2);
                    
                    let data = await apiService.createShortLink(linkValue);

                    console.log(data);
                    if (data instanceof Error){
                        setError(data.message);
                    } else {
                        if (data.ok){
                            let newUrl: Url = {
                                originalLink: data.result.original_link,
                                shortLink: data.result.full_short_link,
                                isCopied: false
                            }

                            addUrl(newUrl);

                            linkRef.current.value = "";
                        } else {
                            setError("An Error ocurred");
                        }
                    }
                } else {
                    setError("The Url typed is not Valid!");
                }
                return;
            }
        }

        setError("Please add a link");
    }

    function handleError(){
        if (error){
            setError(null);
        }
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Image
                    src={surfaceType == "desktop" ? "/assets/bg-shorten-desktop.svg" : "/assets/bg-shorten-mobile.svg"}
                    alt="Form Background"
                    layout="fill"
                    />
                <TextFieldContainer error={error}>
                    <TextField placeholder="Shorten a link here..." ref={linkRef} onChange={handleError}/>
                </TextFieldContainer>
                <Button zIndex="1" padding="0.25rem 1rem">
                    Shorten it!
                </Button>
            </Form>
            {
                urls.map((url, index) => {
                    return <UrlItem key={index} url={url} index={index}/>
                })
            }
        </Container>
    )
}