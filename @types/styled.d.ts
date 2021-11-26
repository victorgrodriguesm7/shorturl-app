import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primary: {
                cyan: string;
                violet: string;
            },
            secondary: string;
            neutral: {
                gray: string;
                grayishViolet: string;
                darkBlue: string;
                darkViolet: string;
            }
        },    
        fontSize: {
            xLarge: string;
            large: string;
            medium: string;
            small: string;
        },
        fontWeight: {
            bold: number;
            default: number;
        }
    }
}
