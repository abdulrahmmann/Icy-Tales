export interface ClassicCardType {
    id: number
    name: string,
    description: string,
    price: string,
    rating: string,
    image: string | React.FC<unknown>,
    background: string,
}

export interface CategoryCardType {
    category: string,
    background: string | React.FC<unknown>,
    className: string
}

export interface TestimonialsType {
    id: number;
    person: string;
    image: string | React.FC<unknown>;
    description: string;
    rating: number;
}

export interface CustomButtonType {
    text: string;
    background: string;
    route: string;
    onClick?: () => void;
}