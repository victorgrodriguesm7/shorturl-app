import { ResponseDto, ResponseDtoFromJson } from "../Models/ResponseDto";
import { IHttpClient } from "./http_client";

class ApiService {
    client: IHttpClient;

    constructor(client: IHttpClient){
        this.client = client;
    }

    async createShortLink(url: string): Promise<ResponseDto | Error> {
        return await this.client.post<ResponseDto | Error>("/shorten", null, ResponseDtoFromJson, {
            url
        });
    }
}

export default ApiService;