import {CategoryCardType} from "../../types";
import {ArrowRightIcon} from "@heroicons/react/24/outline";

const CategoryCard = (category: CategoryCardType) => {
    return (
        <div className={`${category.className} h-[350px] rounded-[20px]`}
             style={{
                 backgroundImage: `url(${category.background})`,
                 backgroundSize: 'cover',
                 backgroundPosition: 'center center',
             }}>
            <div className={`p-2.5 h-full relative`}>
                <div className={`p-2.5 rounded-lg bg-white flex items-center justify-between absolute bottom-[10px] right-[10px] left-[10px]`}>
                    <h1 className={`text-sm text-clr-black font-semibold`}>{category.category}</h1>
                    <div className={`flex items-center justify-center bg-clr-pink rounded-full size-8 cursor-pointer`}>
                        <ArrowRightIcon className={`text-white size-3 font-bold`}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;
