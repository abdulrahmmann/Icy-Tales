// import Footer from "../layouts/Footer.tsx";
import HeroSection from "../components/home/HeroSection.tsx";
import ReliveSection from "../components/home/ReliveSection.tsx";
import ClassicFavoritesSection from "../components/home/ClassicFavoritesSection.tsx";
import CategoriesSection from "../components/home/CategoriesSection.tsx";

function HomePage() {
    return (
        <main className={`min-h-screen w-full overflow-x-hidden flex flex-col justify-between`}>
            <HeroSection/>
            <ReliveSection />
            <ClassicFavoritesSection />
            <CategoriesSection />
            {/*<Footer/>*/}
        </main>
    );
}

export default HomePage;