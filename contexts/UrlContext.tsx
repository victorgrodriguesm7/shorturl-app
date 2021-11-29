import { createContext, useContext, useEffect, useState } from "react";

export interface Url {
    originalLink: string;
    shortLink: string;
    isCopied: boolean;
}

interface UrlContext {
    urls: Array<Url>;
    addUrl(url: Url): void;
    copyUrl(index: number): void;
}

interface UrlContextProviderProps {
    children: React.ReactNode;
}

const context = createContext<UrlContext>({} as UrlContext);

export default function UrlContextProvider({ children }: UrlContextProviderProps) {
    const [ urls, setUrls ] = useState<Array<Url>>(new Array<Url>());

    function loadUrls(){
        let result = localStorage.getItem('urls');

        if (result){
            let urls = JSON.parse(result);

            urls = urls.map((url: Url) => ({ ...url, isCopied: false }));

            setUrls(urls as Array<Url>);
            return;
        }

        setUrls(new Array<Url>());
    }
    
    function addUrl(url: Url): void{
        setUrls((oldState) => {
            if (oldState.length + 1 > 3){
                return oldState.slice(1).concat(url);
            }

            return oldState.concat(url);
        });
    }

    function saveUrls(): void{
        localStorage.setItem('urls', JSON.stringify(urls));
    }

    function copyUrl(index: number): void {
        setUrls((state) => {
            state[index].isCopied = true;

            let url = state[index];

            navigator.clipboard.writeText(url.shortLink);

            return state;
        })
    }

    useEffect(() => {
        loadUrls();

        return () => saveUrls();
    }, []);

    useEffect(() => {
        saveUrls();
    }, [urls]);

    let valuesProvided = {
        urls,
        addUrl,
        copyUrl
    };

    return (
        <context.Provider value={valuesProvided}>
            { children }
        </context.Provider>
    );
}
export function useUrl(){
    return useContext(context);
}