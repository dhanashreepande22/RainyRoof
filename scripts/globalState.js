const globalState = {
    currentPage: 'home',
    cities: [
        { id: 'lisbon', name: 'Lisbon', happyEaters: 2000, topChefs: 50, socialHandle: '@rainy_roof_lx' },
        { id: 'san-francisco', name: 'San Francisco', happyEaters: 3000, topChefs: 150, socialHandle: '@rainy_roof_sf' },
        { id: 'berlin', name: 'Berlin', happyEaters: 2500, topChefs: 250, socialHandle: '@rainy_roof_berlin' },
        { id: 'london', name: 'London', happyEaters: 2700, topChefs: 50, socialHandle: '@rainy_roof_london' }
    ],
    reviews: [
        {
            text: "RainyRoof is just AWESOME in a single word! Just launched a startup which leaves me with no time for cooking, so RainyRoof is a life-saver. Now that I got used to it, I could live without my daily meals!",
            reviewer: "Alberto Duncan",
            photoSrc: "assets/customer-1.jpg"
        },
        {
            text: "Inexpensive, healthy and great-tasting meals, delivered right to my home. We have lots of food delivery services in Lisbon, but no one comes even close to RainyRoof. Me and my family are so in love!",
            reviewer: "Joana Silva",
            photoSrc: "assets/customer-2.jpg"
        },
        {
            text: "I was looking for a quick and easy food delivery service in San Francisco. I tried a lot of them and ended up with RainyRoof. Best food delivery service in the Bay Area. Keep up the great work!",
            reviewer: "Milton Chapman",
            photoSrc: "assets/customer-3.jpg"
        }
    ]
};

export default globalState;
