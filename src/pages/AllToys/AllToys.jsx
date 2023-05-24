import { useContext, useEffect, useRef, useState } from "react";
import AllToyRow from "./AllToyRow";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import Loader from "../Loader/Loader";



const AllToys = () => {

    useTitle('All Toys');
    const [loading, setLoading] = useState(true);
    const [allToys, setAllToys] = useState([]);
    const { user } = useContext(AuthContext);
    const { totalToys } = useLoaderData();
    const [currentPage, setCurrentPage] = useState(0);
    const [toyPerPage, setToyPerPage] = useState(20);
    const [search, setSearch] = useState('');

    const searchRef = useRef(null);

    const totalPages = Math.ceil(totalToys / toyPerPage);
    const pageNumber = [...Array(totalPages).keys()]

    useEffect(() => {
        fetch(`https://b7a11-toy-marketplace-server-side-jahangir2k04.vercel.app/all-toys?search=${search}&page=${currentPage}&limit=${toyPerPage}`)
            .then(res => res.json())
            .then(data => {
                setAllToys(data);
                setLoading(false);
            })
    }, [currentPage, toyPerPage, search]);


    if (loading) {
        return <Loader></Loader>
    }


    const handleAlert = () => {
        if (!user) {
            Swal.fire({
                icon: 'warning',
                text: 'You have to log in first to view details!',
            })
        }
    }

    const options = [5, 10, 20, 40, 70, 100];
    const handleDropdownChange = (event) => {
        const selectedItemsPerPage = parseInt(event.target.value);
        setToyPerPage(selectedItemsPerPage);
        setCurrentPage(0); // Reset to the first page
    };

    const handleSearch = () => {
        setSearch(searchRef.current.value);
    }

    return (
        <div className="max-w-7xl mx-auto px-2 my-10">
            <div className="flex items-center justify-between mb-3">
                <div className="form-control">
                    <div className="input-group">
                        <input type="text" placeholder="Search…" className="input input-bordered" ref={searchRef} />
                        <button onClick={handleSearch} className="btn btn-square bg-red-600 hover:bg-red-600 border-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
                <div className="flex  gap-2">
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
                                handleAlert={handleAlert}
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