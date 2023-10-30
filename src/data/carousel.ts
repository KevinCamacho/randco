export interface ICarousel {
    desktopImage: string;
    mobileImage: string;
    text: string;
    altText: string;
    navigate?: string;
    redirect?: string;
}

export const carouselData: ICarousel[] = [
    {
        "desktopImage": "RCO-10.jpg",
        "mobileImage": "RCO-9-edited.jpg",
        "text": "Meet the team behind it all",
        "altText": "Meet the team",
        "navigate": "/meet-the-stylists"
    },
    {
        "desktopImage": "RCO-101.jpg",
        "mobileImage": "RCO-101.jpg",
        "text": "Check out our products",
        "altText": "Products",
        "navigate": "/products"
    }
];