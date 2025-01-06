interface ICategories {
    id: string
    image: string;
    title: string;
    description: string;
}

export const categories: ICategories[] = [
    {
        id: "1",
        image: '/category-images/car-circle.png',
        title: 'Car Reviews',
        description: 'Lorem ipsum dolor sit amet consectetur. Urna dignissim ac egeendrerit in.'
    },
    {
        id: "2",
        image: '/category-images/circle-2.png',
        title: 'Maintenance Tips',
        description: 'Lorem ipsum dolor sit amet consectetur. Urna dignissim ac egeendrerit in.'
    },
    {
        id: "3",
        image: '/category-images/stering-circle.png',
        title: 'Driving Tips',
        description: 'Lorem ipsum dolor sit amet consectetur. Urna dignissim ac egeendrerit in.'
    },
    {
        id: "4",
        image: '/category-images/tire-circle.png',
        title: 'Car Modifications',
        description: 'Lorem ipsum dolor sit amet consectetur. Urna dignissim ac egeendrerit in.'
    },
]