export interface ResponseDto {
    ok: boolean;
    result: {
        code: string;
        short_link: string;
        full_short_link: string;
        short_link2: string;
        full_short_link2: string;
        share_link: string;
        full_share_link: string;
        original_link: string;
    }
}

export function ResponseDtoFromJson(data: any){
    return data as ResponseDto;
}