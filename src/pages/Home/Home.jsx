import useTitle from "../../hooks/useTitle";
import Banner from "./Banner";
import Gallery from "./Gallery/Gallery";
import ShopByCategory from "./ShopByCategory/ShopByCategory";

const Home = () => {
    useTitle('Home');
    return (
        <div className="max-w-7xl mx-auto px-2">
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
        </div>
    );
};

export default Home;