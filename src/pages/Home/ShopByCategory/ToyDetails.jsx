import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {

    const { name, photo, sellerName, sellerEmail, price, rating, quantity, description } = useLoaderData();

    return (
        <div className="my-24 max-w-7xl mx-auto px-2 grid grid-cols-1 md:grid-cols-2">
            <div className="">
                <img className="mx-auto" src={photo} alt="" />
            </div>
            <div className="text-lg space-y-2">
                <h3>Toy Name : {name}</h3>
                <p>Seller Name : {sellerName}</p>
                <p>Seller Email : {sellerEmail}</p>
                <p>Price : ${price}</p>
                <p>Rating : {rating}</p>
                <p>Quantity : {quantity}</p>
                <p>Description : {description}</p>
            </div>
        </div>
    );
};

export default ToyDetails;