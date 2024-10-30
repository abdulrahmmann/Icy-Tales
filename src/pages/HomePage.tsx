import HeroSection from "../components/home/HeroSection.tsx";
import ReliveSection from "../components/home/ReliveSection.tsx";
import ClassicFavoritesSection from "../components/home/ClassicFavoritesSection.tsx";
import CategoriesSection from "../components/home/CategoriesSection.tsx";
import BestSellersSection from "../components/home/BestSellersSection.tsx";
import TestimonialSection from "../components/home/TestimonialSection.tsx";
import SummerSpecialSection from "../components/home/SummerSpecialSection.tsx";
import SignupExclusiveDeals from "../components/home/SignupExclusiveDeals.tsx";
import Footer from "../layouts/Footer.tsx";

function HomePage() {
    return (
        <main className={`min-h-screen w-full overflow-x-hidden flex flex-col justify-between`}>
            <HeroSection/>

            <ReliveSection />

            <ClassicFavoritesSection />

            <CategoriesSection />

            <BestSellersSection />

            <SummerSpecialSection />

            <TestimonialSection />

            <SignupExclusiveDeals />

            <Footer/>
        </main>
    );
}

export default HomePage;