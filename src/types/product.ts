type Rating = {
    stars: number,
    count: number
}

export type Product = {
    id: string,
    image: string,
    name: string,
    rating: Rating
    priceCents: number,
    keywords: string[]
}