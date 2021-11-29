import { useCallback, useEffect, useState } from "react";

type SurfaceType = "desktop" | "mobile";

export default function useResponsive(){
    const [ surfaceType, setSurfaceType ] = useState<SurfaceType>("desktop");


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