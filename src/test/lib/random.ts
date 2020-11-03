export function getRandomNumber(length: number) {
    return Math.floor(Math.pow(10, length - 1) + Math.random() * 9 * Math.pow(10, length - 1));
}

export function getRandomString(charLength: number) {
    let randomText = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for (let i = 0, l = charLength; i < l; i++) {
        randomText += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return randomText;
}

export function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}