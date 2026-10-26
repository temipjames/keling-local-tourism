export interface Destination {
    id: string;
    name: string;
    description: string;
    image: string;
    category: "popular" | "history" | "nature";
}

export interface TourGuide {
    id: string;
    name: string;
    rating: "5 star" | "4 star" | "3 star" | "2 star" | "1 star";
    image: string;
}

export interface GalleryImage {
    id: string;
    src: string;
    alt: string;
}