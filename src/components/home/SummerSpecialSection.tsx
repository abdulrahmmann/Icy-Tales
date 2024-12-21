import CustomButton from "./CustomButton.tsx";
import SpecialIcecreamImage from "../../assets/images/home/special-icecream-image.svg"
import SpecialDotedarrowImage from "../../assets/images/home/special-dotedarrow.svg"

const SummerSpecialSection = () => {
    return (
        <section
            className={`SummerSpecialSection w-full h-full relative py-32 bg-clr-purple`}>
            <div className={`container mx-auto`}>
                <div className={`flex flex-col sm:flex-row items-center justify-center gap-x-20 gap-y-5`}>
                    <div className={`text-white z-10 text-center sm:text-start`}>
                        <h3 className={`mt-5 font-berkshire text-6xl`}>Summer Special!</h3>
                        <p className={`mt-5 text-white text-base font-extralight`}>Buy One Sundae, Get One 50% Off!!</p>
                        <CustomButton route={""} text={"Get This Deal"} background={"#F83D8E"} />
                    </div>

                    <div className={`relative z-10`}>
                        <img src={SpecialIcecreamImage} alt={"SpecialIcecreamImage"} className={`h-[350px]`} />
                        <div className={`absolute -left-[20%] -top-[20%] -z-10`}>
                            <img src={SpecialDotedarrowImage} alt={"SpecialDotedarrowImage"} className={``}/>
                            <div className={`size-20 bg-gradient-to-b from-[#FBAB2A] to-[#FFC972] rounded-full border-4 border-[#F69C0C] flex items-center justify-center text-white text-xl font-bold text-center
                            absolute -z-10 -bottom-[32px] -left-[26px]`}>
                                50% <br /> OFF
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SummerSpecialSection;
