import {ClassicCardType} from "../../types";
import {ShoppingCartIcon} from "@heroicons/react/16/solid";
import {StarIcon} from "@heroicons/react/24/solid";

const ClassicCard = (card: ClassicCardType) => {
    return (
        <div className={`h-[400px] bg-white rounded-[20px] p-3`} key={card.id}>
            <div className={`w-full h-[200px] bg-[${card.background}] rounded-[20px] flex justify-center items-center`}
                 style={{ backgroundColor: card.background }}>
                <img src={`${card.image}`} alt={"card image"} className={`max-h-[160px]`} />
            </div>
            <div className={`mt-5`}>
                <div className={`flex flex-row items-center justify-between h-[48px] gap-2`}>
                    <h1 className={`text-clr-black text-base font-bold`}>{card.name}</h1>
                    <div className={`flex flex-row items-center gap-1`}>
                        <StarIcon className={`size-4 text-[#FBAB2A]`}/>
                        <span className={`text-clr-black text-base font-bold`}>{card.rating}</span>
                    </div>
                </div>

                <div className={`mt-3 h-[48px]`}>
                    <p className={`text-sm text-clr-grey`}>Rich chocolate ice cream with chunks of brownie.</p>
                </div>
                <div className={`flex items-center justify-between h-[48px]`}>
                    <h1 className={`text-2xl text-clr-pink font-bold`}>{card.price}$</h1>
                    <div className={`size-8 rounded-full bg-clr-purple flex items-center justify-center cursor-pointer`}>
                        <ShoppingCartIcon className={`size-4 text-white`}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassicCard;