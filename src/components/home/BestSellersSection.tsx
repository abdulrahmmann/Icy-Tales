import ClassicLeftImage from "../../assets/images/home/classic-left-icecream.svg";
import ClassicRightImage from "../../assets/images/home/classic-right-icecream.svg";
import ClassicFavoritesSwiper from "../../lib/ClassicFavoritesSwiper.tsx";

const BestSellersSection = () => {
    return (
        <section
            className={`classic-favorites-section w-full h-full relative md:pb-0 bg-[#F5F9FC]`}>
            <div className={`container mx-auto py-32`}>
                <img src={ClassicLeftImage} alt={"ClassicLeftImage"} className={`absolute left-0 bottom-0`}/>
                <img src={ClassicRightImage} alt={"ClassicRightImage"} className={`absolute right-0 top-0 p-1`}/>
                <div className={`text-center relative`}>
                    <h1 className="text-5xl text-clr-black font-berkshire">Our
                        <span className="text-clr-pink"> Best</span> Sellers</h1>
                    <p className={`text-base text-clr-grey mt-4`}>Discover the favorites that keep our customers coming back for more.</p>
                </div>
                <div className={`mt-10`}>
                    <ClassicFavoritesSwiper/>
                </div>
            </div>
        </section>
    );
};

export default BestSellersSection;