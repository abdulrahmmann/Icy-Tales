import ReliveGirlImage from '../../assets/images/home/relive-image.svg';
import ReliveTriangleImage from '../../assets/images/home/relive-triangle.svg';
import ReliveCircleImage from '../../assets/images/home/relive-circle.svg';
import ReliveRightbottomImage from '../../assets/images/home/relive-rightbottomimage.svg';
import ReliveDotedImage from '../../assets/images/home/relive-doted.svg';
import {Link} from "react-router-dom";

const ReliveSection = () => {
    return (
        <section className={`w-full h-full bg-white relative md:pb-0`}>
            <div className={`container mx-auto `}>
                <div className={`flex flex-col md:flex-row items-center md:justify-center md:gap-x-20 gap-y-10 relative`}>
                    <div className={`relive-girl-img relative`}>
                        <img
                            src={ReliveGirlImage}
                            alt="Relive Girl"
                            className={`relative z-10`}
                        />
                        <img src={ReliveCircleImage} alt={"ReliveCircleImage"}
                             className={`absolute -left-20 top-[80%]`}/>

                        <img src={ReliveDotedImage} alt={"ReliveCircleImage"}
                             className={`absolute top-32 right-0`}/>
                    </div>

                    <div className={`max-w-full md:max-w-[500px] text-center md:text-start`}>
                        <h1 className={`text-5xl text-clr-black font-berkshire`}>
                            Relive the Sweet
                            Memories of Classic
                            <h1 className={`text-clr-pink`}>Ice Creams</h1>
                        </h1>
                        <p className={`mt-6 text-sm md:text-base text-clr-grey`}>
                            From rich chocolate fudge to creamy vanilla sundaes,
                            discover our menu of classic ice cream creations.
                        </p>
                        <Link to={""}
                              className={`mx-auto md:mx-0 block w-fit text-sm text-white font-semibold bg-clr-pink hover:bg-clr-pink/85 transition-all shadow-sm px-8 py-5 rounded-[30px] mt-6`}>
                            Explore Our Menu
                        </Link>
                    </div>

                    <img src={ReliveTriangleImage} alt={"ReliveTriangleImage"} className={`absolute right-0`}/>

                    <img src={ReliveRightbottomImage} alt={"ReliveRightbottomImage"} className={`absolute right-0 bottom-0`}/>
                </div>

            </div>
        </section>
    );
};

export default ReliveSection;
