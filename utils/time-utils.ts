export function timeDiffInSecond(firstDate: Date, secondDate: Date) {
    const difference = Math.abs(firstDate.getTime() - secondDate.getTime()) / 1000;
    return Math.floor(difference);
}

export function padTime(num: number) {
    return num.toString().padStart(2,'0');
}