import CustomButton from "./CustomButton.tsx";
import ReliveCircle from "../../assets/images/home/relive-circle.svg";
import ReliveTriangle from "../../assets/images/home/relive-triangle.svg";

const SignupExclusiveDeals = () => {
    return (
        <section
            className={`w-full h-full md:pb-0 bg-[#EAF8F9]`}>
            <div className={`container mx-auto py-32 relative`}>
                <img src={ReliveCircle} alt={"ReliveCircle"} className={`absolute top-[50%] left-[5%]`} />
                <img src={ReliveTriangle} alt={"ReliveCircle"} className={`absolute top-[50%] right-[5%]`} />
                <div className={`max-w-full sm:max-w-[650px] mx-auto`}>
                    <div className={`text-center relative`}>
                        <h1 className="text-5xl text-clr-black font-berkshire"> Sign up For
                            <span className="text-clr-pink"> Exclusive Deals</span> and Updates</h1>
                        <p className={`text-sm md:text-base text-clr-grey mt-4 max-w-[800px] mx-auto`}>
                            Get 10% off your next order and stay updated with our latest offers.
                        </p>
                    </div>
                    <div className={`mt-10`}>
                        <div className={`flex items-center gap-3 h-[52px]`}>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Enter Your Email Address"
                                className="block w-full px-8 py-4 rounded-[30px] border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#F83D8E] sm:text-sm/6 outline-none"
                            />
                            <CustomButton text={"Subscribe"} background={"#F83D8E"} route={""} className={`mt-0`}/>
                        </div>
                        {/*<div className={`mt-10`}>*/}
                        {/*    <div className={`flex items-center gap-1 justify-center`}>*/}
                        {/*        <input type={"radio"} className={``}/>*/}
                        {/*        <div className={`text-sm text-clr-grey`}>*/}
                        {/*            I agree to the*/}
                        {/*            <span className={`text-clr-pink font-bold underline cursor-pointer`}>  Privacy Policy</span>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignupExclusiveDeals;