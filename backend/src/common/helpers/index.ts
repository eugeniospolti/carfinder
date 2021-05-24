export function DateWithoutTime(dateTime: Date) {
    var date = new Date(dateTime.getTime());
    date.setHours(0, 0, 0, 0);
    return date;
}
export function DateAddMonth(date:Date,  months:number): Date {
    const newDate = new Date(date.getFullYear(),date.getMonth(),date.getDay());
    newDate.setMonth(date.getMonth()+months);
    return newDate;
} 