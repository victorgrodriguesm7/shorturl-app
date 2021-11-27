import axios, { AxiosInstance, AxiosResponse } from 'axios';

export type FromJson<T> = (data: any) => T
abstract class IHttpClient {
    public abstract get<T>(endpoint: string, fromJson: FromJson<T>, queryParams: Object): Promise<T | Error>;
    public abstract post<T>(endpoint: string, data: any, fromJson: FromJson<T>, queryParams: Object): Promise<T | Error>;
}

class AxiosHttpClient implements IHttpClient {
    client: AxiosInstance;

    constructor(){
        this.client = axios.create({
            baseURL: "https://api.shrtco.de/v2/"
        });
    }

    private handleError(result: AxiosResponse<any, any>): Error{
        let error = result.data.error_code;
        switch(error){
            case 1:
                return new Error("No Url specified");
            case 2:
                return new Error("Invalid URL submitted");
            case 3:
                return new Error("Rate limit reached. Wait a second and try again.");
            case 4:
                return new Error("IP-Address has been blocked.");
            case 5:
                return new Error("Shrt code already taken / in use");
            case 6:
                return new Error("Unknown Error");
            case 7:
                return new Error("No code specified");
            case 8:
                return new Error("Invalid Code");
            case 9:
                return new Error("Missing required parameters");
            case 10:
                return new Error("Trying to shorten a disallowed link");
        }
        return new Error("An error Ocurred");
    }

    public async get<T>(endpoint: string, fromJson: FromJson<T>, queryParams: Object): Promise<T | Error>{
        let result = await this.client.get(endpoint, { params: queryParams });

        if (result.data.error_code){
            return this.handleError(result)
        }

        let data = result.data;
        
        return fromJson(data);
    }

    public async post<T>(endpoint: string, data: any, fromJson: FromJson<T>, queryParams: Object): Promise<T | Error>{
        let result = await this.client.post(endpoint, data, { params: queryParams });

        if (result.data.error_code){
            return this.handleError(result)
        }
        
        return fromJson(result.data); 
    }
}

export {
    AxiosHttpClient,
    IHttpClient,
};