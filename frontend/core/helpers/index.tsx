export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

export function DateToStringFormat(date?:Date): string {
    return ( date ? (date.getFullYear() + "-" + ((date.getMonth() + 1)) + "-" + (date.getDate() )) : null );
} 