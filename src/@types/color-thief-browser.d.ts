declare module 'color-thief-browser' {
    export default class ColorThief {
        getColor(image: HTMLImageElement, quality?: number): [number, number, number];
        getPalette(image: HTMLImageElement, paletteSize?: number, quality?: number): [number, number, number][];
    }
}
