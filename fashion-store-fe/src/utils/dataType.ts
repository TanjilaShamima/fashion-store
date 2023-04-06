export type categoryType = {
    id: number
    img: string
    title: string
    category: string
}

export type productType = {
    _id: number;
    title: string;
    image: string;
    size: string[];
    categories: string[];
    color: string[];
    inStock: boolean;
    description: string;
    price: number;
    createdAt: Date;
    updatedAt: Date;
}

export type filterType = {
    color: string,
    size: string
}