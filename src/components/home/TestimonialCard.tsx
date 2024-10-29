import QuoteImage from '../../assets/images/home/testimonial3-quoteimage.png.svg';
import StarImage  from '../../assets/images/home/rating-star.svg';
import {TestimonialsType} from "../../types";

const TestimonialCard = (testi: TestimonialsType) => {
    return (
        <div className={`h-[250px] rounded-[20px] bg-[#F5F9FC] p-8 border-y border-clr-pink shadow-sm drop-shadow-lg`}>
            <div className={`flex flex-col items-start gap-y-6`}>
                <img src={QuoteImage} alt={"Quoteimage"} className={``} />
                <p className={`text-sm text-[#646464]`}>{testi.description}</p>
                <div className={`flex items-start gap-4`}>
                    <img src={`${testi.image}`} alt={"testimonial person image"} className={`rounded-full`} />
                    <div className={`flex flex-col gap-2`}>
                        <div className={`flex items-center gap-0.5`}>
                            {Array.from({ length: testi.rating }).map((_, index) => (
                                <img
                                    key={index}
                                    src={StarImage}
                                    alt="star"
                                    className="w-3 h-3"
                                />
                            ))}
                        </div>
                        <h1 className={`text-base text-clr-pink font-bold`}>{testi.person}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;