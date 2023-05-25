import { useLoaderData } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";

const ToyDetails = () => {

    const { name, photo, sellerName, sellerEmail, price, rating, quantity, description } = useLoaderData();
    useTitle(name)

    return (
        <div className="my-24 max-w-7xl mx-auto px-2 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="md:h-[340px]">
                <img className="mx-auto h-full" src={photo} alt="" />
                <h3 className="text-5xl text-center font-bold mt-2">{name}</h3>
            </div>
            <div className="text-lg space-y-2">
                <h3><span className="font-semibold">Toy Name</span> : {name}</h3>
                <p><span className="font-semibold">Seller Name</span> : {sellerName}</p>
                <p><span className="font-semibold">Seller Email</span> : {sellerEmail}</p>
                <p><span className="font-semibold">Price</span> : ${price}</p>
                <p><span className="font-semibold">Rating</span> : {rating}</p>
                <p><span className="font-semibold">Quantity</span> : {quantity}</p>
                <p><span className="font-semibold">Description</span> : {description}</p>
            </div>
        </div>
    );
};

export default ToyDetails;