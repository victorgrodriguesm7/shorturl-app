export default function validateUrl(url: string): boolean{
    let urlParsed;
    try{
        urlParsed = new URL(url);
    }catch(error){
        return false
    }

    return urlParsed.protocol == "http:" || urlParsed.protocol == "https:"
}