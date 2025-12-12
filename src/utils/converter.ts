export function centsToDollar(cents: number) {
    return (cents / 100).toFixed(2)
}

export function ratingStarToString(ratingStar: number) {
    return (ratingStar * 10).toString();
}