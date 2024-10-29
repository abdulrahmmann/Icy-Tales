import ClassicLeftImage from '../../assets/images/home/classic-left-icecream.svg';
import ClassicRightImage from '../../assets/images/home/classic-right-icecream.svg';
import ClassicFavoritesSwiper from "../../lib/ClassicFavoritesSwiper.tsx";

const ClassicFavoritesSection = () => {
    return (
        <section
            className={`classic-favorites-section w-full h-full bg-white relative md:pb-0 bg-bg-linear-pink-2`}>
            <div className={`container mx-auto py-32`}>
                <img src={ClassicLeftImage} alt={"ClassicLeftImage"} className={`absolute left-0 top-0`}/>
                <img src={ClassicRightImage} alt={"ClassicRightImage"} className={`absolute right-0 bottom-0 p-1`}/>
                <div className={`text-center relative`}>
                    <h1 className="text-5xl text-clr-black font-berkshire">Our
                        <span className="text-clr-pink"> Classic</span> Favorites</h1>
                    <p className={`text-sm md:text-base text-clr-grey mt-4`}>Check out our top products that our customers love.</p>
                </div>
                <div className={`mt-10`}>
                    <ClassicFavoritesSwiper />
                </div>
            </div>
        </section>
    );
};

export default ClassicFavoritesSection;