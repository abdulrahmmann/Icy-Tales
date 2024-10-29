import TestimonialSwiper from "../../lib/TestimonialSwiper.tsx";

const TestimonialSection = () => {
    return (
        <section
            className={`classic-favorites-section w-full h-full relative md:pb-0 bg-bg-linear-pink-1`}>
            <div className={`container mx-auto py-32`}>
                <div className={`text-center relative`}>
                    <h1 className="text-5xl text-clr-black font-berkshire"> Hear from Our
                        <span className="text-clr-pink"> HappyIce Cream</span> Lovers</h1>
                    <p className={`text-sm md:text-base text-clr-grey mt-4 max-w-[800px] mx-auto`}>
                        Every scoop tells a story! From classic flavors to adventurous delights, our ice cream brings
                        joy with each cone. Don’t just take our word for it—discover what our customers say about their
                        delicious experiences!
                    </p>
                </div>
                <div className={`mt-10`}>
                    <TestimonialSwiper />
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;

