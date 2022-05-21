export function getSize(size: number, imageWidth: number, imageHeight: number) {
    let width: number;
    let height: number;

    if (imageWidth > imageHeight) {
        width = size;
        height = imageHeight / imageWidth * size;
    } else {
        width = imageWidth / imageWidth * size;
        height = size;
    }

    return [width + 'vw', height + 'vw']
}