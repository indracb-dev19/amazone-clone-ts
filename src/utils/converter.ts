import dayjs from "dayjs";

export function centsToDollar(cents: number) {
    return (cents / 100).toFixed(2)
}

export function ratingStarToString(ratingStar: number) {
    return (ratingStar * 10).toString();
}

export function msToDate(ms?: number) {
    if (typeof ms == 'number') {
        return dayjs(ms).format('dddd, MMMM D')
    }

    return '-'
}