export type SurfaceType = "desktop" | "mobile" | undefined;

export default function getSurface(): SurfaceType{
    const { innerWidth: width } = window;

    if (width > 850){
        return "desktop"
    } else {
        return "mobile"
    }
}