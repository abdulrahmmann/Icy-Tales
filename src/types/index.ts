export interface ClassicCardType {
    id: number
    name: string,
    description: string,
    price: string,
    rating: string,
    image: string | React.FC<any>,
    background: string,
}