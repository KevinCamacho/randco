export interface IBusiness {
    name: string;
    address: string;
    googleSearch?: string;
}

export interface IThingsToDo {
    headline: string;
    businessList: IBusiness[];
}

export const thingsToDo: IThingsToDo[] = [
    {
        headline: "Food & Drink",
        businessList: [
            {
                name: "Iron Cafe",
                address: "59 Clinton St,\nMontgomery NY",
                googleSearch: 'https://maps.google.com/?q=iron+cafe+montgomery'
            },
            {
                name: "Copperfields Pub",
                address: "93 Clinton St,\nMontgomery NY",
                googleSearch: 'https://maps.google.com/?q=cooperfields+pub+montgomery'
            },
            {
                name: "Lady",
                address: "91 Clinton St,\nMontgomery NY",
                googleSearch: 'https://maps.google.com/?q=lady+montgomery'
            },
            {
                name: "Ward's Bridge Inn",
                address: "135 Ward St,\nMontgomery NY",
                googleSearch: 'https://maps.google.com/?q=wards+bridge+inn+montgomery'
            },
            {
                name: "88 Charles Street",
                address: "88 Charles St,\nMontgomery NY",
                googleSearch: 'https://maps.google.com/?q=88+charles+steet+restaurant+montgomery'
            },
            {
                name: "The Table",
                address: "73 Clinton St,\nMontgomery NY",
                googleSearch: 'https://maps.google.com/?q=the+table+montgomery'
            },
            {
                name: "RoseMary's Pub",
                address: "11 Union St,\nMontgomery NY",
                googleSearch: 'https://maps.google.com/?q=rosemarys+pub+montgomery'
            },
            {
                name: "City Winery",
                address: "23 Factory St,\nMontgomery NY",
                googleSearch: 'https://maps.google.com/?q=city+winery+montgomery'
            },
            {
                name: "Java Blue Coffee",
                address: "8 Union St,\nMontgomery NY",
                googleSearch: 'https://maps.google.com/?q=java+blu+coffee+montgomery'
            },
            {
                name: "Wildfire Grill",
                address: "74 Clinton St,\nMontgomery NY",
                googleSearch: 'https://maps.google.com/?q=wildfire+grill+montgomery'
            },
        ]
    },
    {
        headline: "Activity",
        businessList: [
            {
                name: "Winding Hills Golf Club",
                address: "1847 NY-17k,\nMontgomery NY",
                googleSearch: 'https://maps.google.com/?q=winding+hills+golf+club+montgomery'
            },
            {
                name: "Winding Hills Park",
                address: "Route 17k,\nMontgomery NY",
                googleSearch: 'https://maps.google.com/?q=winding+hills+park+montgomery'
            },
            {
                name: "The Farm",
                address: "531 River Rd,\nMontgomery NY",
                googleSearch: 'https://maps.google.com/?q=the+farm+montgomery'
            },
            {
                name: "Orange County Arboretum",
                address: "41 Grove St,\nMontgomery NY",
                googleSearch: 'https://maps.google.com/?q=orange+country+arboretum+montgomery'
            },
            {
                name: "Angry Orchard",
                address: "2241 Albany Post Rd,\nWalden NY",
                googleSearch: 'https://maps.google.com/?q=angry+orchard+walden'
            }
        ]
    },
    {
        headline: "Shop",
        businessList: [
            {
                name: "Inglenook Marketplace",
                address: "32 Union St,\nMontgomery NY",
                googleSearch: 'https://maps.google.com/?q=inglenook+marketplace+montgomery'
            },
            {
                name: "Corey's Pickles & Local Marketplace",
                address: "6 Union St,\nMontgomery NY",
                googleSearch: 'https://maps.google.com/?q=coreys+pickles+local+marketplace+montgomery'
            },
            {
                name: "Montgomery Book Exchange",
                address: "6 Union St,\nMontgomery NY",
                googleSearch: 'https://maps.google.com/?q=montgomery+book+exchange'
            },
            {
                name: "Montgomery Mercantile",
                address: "18 Bridge St,\nMontgomery NY",
                googleSearch: 'https://maps.google.com/?q=montgomery+mercantile+ny'
            }
        ]
    }
]