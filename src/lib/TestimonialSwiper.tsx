import {Autoplay, Pagination} from "swiper/modules";
import {testimonialsIceCream} from "../data";
import {Swiper, SwiperSlide} from "swiper/react";
import TestimonialCard from "../components/home/TestimonialCard.tsx";

const TestimonialSwiper = () => {
    return (
        <Swiper className={`max-w-[1100px]`}
                modules={[Autoplay, Pagination]}
                spaceBetween={50}
                slidesPerView={3}
                autoplay={{delay: 4000}}
                pagination={{clickable: true}}
                effect="flip"
                flipEffect={{slideShadows: true}}
                fadeEffect={{crossFade: true}}
                breakpoints={{
                    0: {slidesPerView: 1, spaceBetween: 20},
                    576: {slidesPerView: 2, spaceBetween: 20},
                    992: {slidesPerView: 3, spaceBetween: 20},
                }}
        >
            {testimonialsIceCream.map((testi) => (
                <SwiperSlide key={testi.id}>
                    <TestimonialCard {...testi} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default TestimonialSwiper;