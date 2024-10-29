import CategoryCard from "./CategoryCard.tsx";
import CategoryImage1 from "../../assets/images/home/category-icecream-1.svg";
import CategoryImage2 from "../../assets/images/home/category-icecream-2.svg";
import CategoryImage3 from "../../assets/images/home/category-icecream-3.svg";
import CategoryImage4 from "../../assets/images/home/category-icecream-4.svg";

const CategoriesSection = () => {
    return (
        <section className={`w-full h-full relative bg-[#F7F2F7]`}>
            <div className={`container mx-auto py-32`}>
                <div className={`text-center relative`}>
                    <h1 className="text-5xl text-clr-black font-berkshire">Explore Our
                        <span className="text-clr-pink"> Categories</span></h1>
                    <p className={`text-sm md:text-base text-clr-grey mt-4`}>Browse through our different categories to find your favorite ice cream treats.</p>
                </div>
                <div className={`mt-10`}>
                    <div className={`grid grid-cols-12 gap-7`}>
                        <CategoryCard className={`col-span-12 sm:col-span-6 lg:col-span-3`} category={"Sundaes"} background={CategoryImage1} />
                        <CategoryCard className={`col-span-12 sm:col-span-6 lg:col-span-3`} category={"Ice Cream Cones"} background={CategoryImage2} />
                        <CategoryCard className={`col-span-12 sm:col-span-6 lg:col-span-3`} category={"Milkshakes"} background={CategoryImage3} />
                        <CategoryCard className={`col-span-12 sm:col-span-6 lg:col-span-3`} category={"Seasonal Flavors"} background={CategoryImage4} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CategoriesSection;