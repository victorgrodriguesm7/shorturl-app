import { useCallback, useEffect, useState } from "react";

type SurfaceType = "desktop" | "mobile";

export default function useResponsive(){
    const [ surfaceType, setSurfaceType ] = useState<SurfaceType>((() => {
        const { innerWidth: width } = window;

        if (width > 850){
            return "desktop";
        } else {
            return "mobile"
        }
    })());


    const handleResize = useCallback(() => {
        const { innerWidth: width } = window;

        if (width > 850){
            setSurfaceType("desktop");
        } else {
            setSurfaceType("mobile")
        }
    }, []);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
    }, [handleResize]);

    return surfaceType;
}