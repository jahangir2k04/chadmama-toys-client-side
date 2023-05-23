import { useContext, useEffect, useState } from "react";
import AllToyRow from "./AllToyRow";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import { useLoaderData } from "react-router-dom";



const AllToys = () => {

    const [allToys, setAllToys] = useState([]);
    const { user } = useContext(AuthContext);
    const { totalToys } = useLoaderData();
    const [currentPage, setCurrentPage] = useState(0);
    const [toyPerPage, setToyPerPage] = useState(20);

    const totalPages = Math.ceil(totalToys / toyPerPage);
    const pageNumber = [...Array(totalPages).keys()]

    useEffect(() => {
        fetch(`http://localhost:5000/all-toys?page=${currentPage}&limit=${toyPerPage}`)
            .then(res => res.json())
            .then(data => {
                setAllToys(data);
            })
    }, [currentPage, toyPerPage]);


    const handleToast = () => {
        if (!user) {
            Swal.fire({
                icon: 'warning',
                text: 'You have to log in first to view details!',
            })
        }
    }

    const options = [ 5, 10, 20, 40, 70, 100];
    const handleDropdownChange = (event) => {
        const selectedItemsPerPage = parseInt(event.target.value);
        setToyPerPage(selectedItemsPerPage);
        setCurrentPage(0); // Reset to the first page
    };

    return (
        <div className="max-w-7xl mx-auto px-2 my-10">
            <div className="flex justify-end mb-2 gap-2">
                <p>Show per page  </p>
                <select value={toyPerPage} onChange={handleDropdownChange}>
                    {
                        options.map(option => (
                            <option value={option} key={option}>
                                {option}
                            </option>))
                    }
                </select>
            </div>
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
                                toy={toy}
                                key={toy._id}
                                handleToast={handleToast}
                            ></AllToyRow>)
                        }
                    </tbody>

                </table>
            </div>
            <div className="text-center mt-5 ">
                <p>current page : {currentPage + 1}</p>
                {
                    pageNumber.map(number =>
                        <button
                            onClick={() => setCurrentPage(number)}
                            className={`${currentPage === number ? 'bg-red-600 text-white' : ''} border-2 border-red-600 px-3 py-1 mr-1 rounded `}
                            key={number}
                        >{number + 1}</button>
                    )
                }
            </div>
        </div>
    );
};

export default AllToys;