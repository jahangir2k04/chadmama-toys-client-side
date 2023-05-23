import { useEffect, useState } from "react";
import Loader from "../../Loader/Loader";
import ToyCard from "./ToyCard";

const ShopByCategory = () => {

    const [loading, setLoading] = useState(true);
    const [toys, setToys] = useState([]);
    const [category, setCategory] = useState('Teddy Bear');

    useEffect(() => {
        fetch(`http://localhost:5000/category?name=${category}`)
            .then(res => res.json())
            .then(data => {
                setToys(data);
                setLoading(false);
            })
    }, [category]);

    if (loading) {
        return <Loader></Loader>
    }

    return (
        <div className="my-10">
            <h3 className="mb-3 text-red-600 text-4xl text-center font-bold">Shop by Category</h3>
            <div className="flex border-b-2 border-t-2 py-2 justify-center">
                <button onClick={() => setCategory('Teddy Bear')} className="border-2 border-gray-500 text-xl font-bold bg-red-50 px-4 py-2">Teddy Bear</button>

                <button onClick={() => setCategory('Horse')} className="border-2 border-gray-500 text-xl font-bold bg-red-50 px-4 py-2">Horse</button>
                
                <button onClick={() => setCategory('Dinosaur')} className="border-2 border-gray-500 text-xl font-bold bg-red-50 px-4 py-2">Dinosaur</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 my-5">
                {
                    toys.map(toy => <ToyCard key={toy._id} toy={toy}></ToyCard>)
                }
            </div>
        </div>
    );
};

export default ShopByCategory;