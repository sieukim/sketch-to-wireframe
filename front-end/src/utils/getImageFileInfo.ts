// returns image file's width and height
export function getImageFileInfo(file: File) {
    return new Promise<{ width: number, height: number }>((res, rej) => {
        const reader = new FileReader(); // CREATE AN NEW INSTANCE.

        reader.onload = function (e) {
            if (e.target === null || e.target.result === null) {
                rej();
                return;
            }
            const img = new Image();
            img.src = e.target.result as string;

            img.onload = function () {
                res({width: img.width, height: img.height});
            }
        };

        reader.readAsDataURL(file);
    });
}
