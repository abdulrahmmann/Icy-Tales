import Header from "../../layouts/Header.tsx";

import {Link} from "react-router-dom";
import {HeroIcrCream, HeroLeftImage} from "../../constants/images.ts";

const HeroSection = () => {
    return (
        <section className={`home-hero-section w-full min-h-screen bg-bg-linear-pink-1 relative`}>
            <Header />
            <div className={`relative mt-10`}>
                <img src={HeroLeftImage} alt={"HeroLeftImage"} className={`absolute left-0 top-0`} />
                <div className={`container mx-auto relative`} style={{height: "calc(100vh - 70px - 125px)"}}>
                    <div className={`flex flex-col md:flex-row items-center justify-center md:justify-center md:gap-x-20 gap-y-10 h-full`}>
                        <div className={`text-center md:text-start mt-10 md:mt-5`}>
                            <div className={`flex flex-row items-center gap-2 justify-center md:justify-start`}>
                                <div className={`hidden md:block w-12 h-0.5 bg-clr-black`}></div>
                                <h1 className={`text-4xl md:text-2xl text-clr-black font-berkshire font-bold`}>Welcome to The</h1>
                            </div>
                            <h1 className={`text-5xl md:text-8xl text-clr-black font-berkshire font-bold md:max-w-[650px]`}>
                                Discover <span className={`text-clr-pink`}>Sweet</span> Delights!
                            </h1>
                            <p className={`text-base text-clr-black max-w-[400px] mt-6 mx-auto md:mx-0`}>
                                Relish the timeless taste of handcrafted ice cream, made with passion and the finest ingredients.
                            </p>
                            <Link to={""} className={`mx-auto md:mx-0 block w-fit text-sm text-white font-semibold bg-clr-purple hover:bg-clr-purple/85 transition-all shadow-sm px-8 py-5 rounded-[30px] mt-5`}>
                                Browse Our Classic Flavors
                            </Link>
                        </div>

                        <div className={`w-[450px] md:w-[450px] pl-6 md:pl-0`}>
                            <img src={HeroIcrCream} alt={"HeroIcrCream"} className={`w-full`} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;