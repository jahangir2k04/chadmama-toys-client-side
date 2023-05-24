import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import ToyRow from "./ToyRow";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";
import Loader from "../Loader/Loader";

const MyToys = () => {

    useTitle('My Toys');
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);
    const [loading, setLoading] = useState(true);
    const [type, setType] = useState('');

    useEffect(() => {
        fetch(`https://b7a11-toy-marketplace-server-side-jahangir2k04.vercel.app/my-toys?email=${user?.email}&sort=${type}`)
            .then(res => res.json())
            .then(data => {
                setMyToys(data);
                setLoading(false);
            })
    }, [user?.email, type]);

    if (loading) {
        return <Loader></Loader>
    }

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://b7a11-toy-marketplace-server-side-jahangir2k04.vercel.app/toy/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your toy has been deleted.',
                                'success'
                            )
                            const remaining = myToys.filter(myToy => myToy._id !== id);
                            setMyToys(remaining);
                        }
                    })
            }
        })
    }

    const handleSorting = event => {
        setType(event.target.value);
    }

    return (
        <div className="max-w-7xl mx-auto px-2 my-10">

            <select onChange={handleSorting} className="py-2 px-3 bg-red-100 border border-red-600">
                <option value="default">Default</option>
                <option value="ascending">Price : Ascending</option>
                <option value="descending">Price : Descending</option>
            </select>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Toy Name</th>
                            <th>Seller Name</th>
                            <th>Seller Email</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>Quantity</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myToys.map(toy => <ToyRow
                                key={toy._id}
                                toy={toy}
                                handleDelete={handleDelete}
                            ></ToyRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyToys;