import useTitle from "../../hooks/useTitle";
import Additional from "./Additional";
import Banner from "./Banner";
import FlashSelling from "./FlashSelling";
import Gallery from "./Gallery/Gallery";
import ShopByCategory from "./ShopByCategory/ShopByCategory";

const Home = () => {
    useTitle('Home');
    return (
        <div className="max-w-7xl mx-auto px-2">
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <FlashSelling></FlashSelling>
            <Additional></Additional>
        </div>
    );
};

export default Home;