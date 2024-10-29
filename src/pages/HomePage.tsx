// import Footer from "../layouts/Footer.tsx";
import HeroSection from "../components/home/HeroSection.tsx";
import ReliveSection from "../components/home/ReliveSection.tsx";
import ClassicFavoritesSection from "../components/home/ClassicFavoritesSection.tsx";
import CategoriesSection from "../components/home/CategoriesSection.tsx";
import BestSellersSection from "../components/home/BestSellersSection.tsx";
import TestimonialSection from "../components/home/TestimonialSection.tsx";

function HomePage() {
    return (
        <main className={`min-h-screen w-full overflow-x-hidden flex flex-col justify-between`}>
            <HeroSection/>
            <ReliveSection />
            <ClassicFavoritesSection />
            <CategoriesSection />
            <BestSellersSection />
            <TestimonialSection />

            {/*<Footer/>*/}
        </main>
    );
}

export default HomePage;