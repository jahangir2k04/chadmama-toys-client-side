import Banner from "./Banner";
import Gallery from "./Gallery/Gallery";

const Home = () => {
    return (
        <div className="max-w-7xl mx-auto px-2">
            <Banner></Banner>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;