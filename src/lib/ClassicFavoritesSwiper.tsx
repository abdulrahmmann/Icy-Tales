import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper/modules";
// @ts-ignore
import "swiper/css";
import {classicFavorites} from "../data";
import ClassicCard from "../components/home/ClassicCard.tsx";

const ClassicFavoritesSwiper = () => {
    return (
        <Swiper className={`max-w-[1100px]`}
                modules={[Autoplay, Pagination]}
                spaceBetween={50}
                slidesPerView={4}
                autoplay={{delay: 4000}}
                pagination={{clickable: true}}
                effect="flip"
                flipEffect={{slideShadows: true}}
                fadeEffect={{crossFade: true}}
                breakpoints={{
                    0: {slidesPerView: 1, spaceBetween: 20},
                    576: {slidesPerView: 2, spaceBetween: 20},
                    992: {slidesPerView: 3, spaceBetween: 20},
                    1024: {slidesPerView: 4, spaceBetween: 20},
                }}
        >
            {classicFavorites.map((card) => (
                <SwiperSlide key={card.id}>
                    <ClassicCard {...card} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default ClassicFavoritesSwiper;