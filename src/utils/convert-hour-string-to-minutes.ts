// 18: -> ["18", "00"] -> [18, 00]

export function convertHourStringToMinutes(hourString: string) {
    const [hous, minutes] = hourString.split(':').map(Number);

    const minutesAmount = (hous * 60) + minutes;

    return minutesAmount;
}