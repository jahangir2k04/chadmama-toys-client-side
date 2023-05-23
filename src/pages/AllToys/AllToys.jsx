import { useEffect, useState } from "react";
import AllToyRow from "./AllToyRow";

const AllToys = () => {

    const [allToys, setAllToys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/all-toys')
            .then(res => res.json())
            .then(data => {
                setAllToys(data);
            })
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-2 my-10">
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>Sub Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allToys.map(toy => <AllToyRow
                                toy={toy} key={toy._id}
                            ></AllToyRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllToys;