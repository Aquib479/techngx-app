export const NavItem = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Products", path: "/products" },
    { id: 4, name: "Services", path: "/services" },
    { id: 5, name: "Contact", path: "/contact" }
]

interface homelines {
    id: number
    img: string
}

export const HomeLines: homelines[] = [
    { id: 1, img: "/assets/home-page-lines/01.png" },
    { id: 2, img: "/assets/home-page-lines/02.png" },
    { id: 3, img: "/assets/home-page-lines/03.png" },
    { id: 4, img: "/assets/home-page-lines/04.png" },
    { id: 5, img: "/assets/home-page-lines/05.png" },
    { id: 6, img: "/assets/home-page-lines/06.png" },
    { id: 7, img: "/assets/home-page-lines/07.png" },
    { id: 8, img: "/assets/home-page-lines/08.png" },
    { id: 9, img: "/assets/home-page-lines/09.png" },
    { id: 10, img: "/assets/home-page-lines/10.png" },
    { id: 11, img: "/assets/home-page-lines/11.png" },
    { id: 12, img: "/assets/home-page-lines/12.png" },
    { id: 13, img: "/assets/home-page-lines/13.png" },
    { id: 14, img: "/assets/home-page-lines/14.png" },
    { id: 15, img: "/assets/home-page-lines/15.png" },
    { id: 16, img: "/assets/home-page-lines/16.png" },
];

interface Card {
    title: string,
    description: string,
    image: string
}

export const cards: Card[] = [
    {
        title: "Our Mission",
        description:
            "We are on a mission to empower businesses to thrive in the digital age by providing innovative, reliable, and customized IT services and solutions. We strive to be a trusted partner, delivering exceptional consulting services and cutting-edge technology that drive efficiency, growth, and long-term success. Through our commitment to quality, integrity, and continuous improvement, we aim to transform challenges into opportunities, helping our clients navigate the complexities of technology with confidence and ease.",
        image:
            "https://images.unsplash.com/photo-1608664923078-93e641adab43?auto=format&fit=crop&w=720&h=702",
    },
    {
        title: "Our Vision",
        description:
            "Our vision is to be the leading catalyst for digital transformation, recognized globally for revolutionizing the way businesses leverage technology. We aspire to create a future where every organization, regardless of size or industry, can harness the full potential of IT to innovate, compete, and succeed. By fostering a culture of excellence, collaboration, and forward-thinking, we aim to shape the digital landscape, setting new standards for service, innovation, and impact in the technology consulting industry.",
        image:
            "https://images.unsplash.com/photo-1540162875225-3f6b56d69fe8?auto=format&fit=crop&w=720&h=702",
    },
];