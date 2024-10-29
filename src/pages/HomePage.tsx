import Header from "../layouts/Header.tsx";
import Footer from "../layouts/Footer.tsx";

function HomePage() {
    return (
        <main className={`min-h-screen w-full flex flex-col justify-between`}>
            <Header />
                
            <Footer/>
        </main>
    );
}

export default HomePage;