import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from '../../providers/AuthProvider'


const AllToyRow = ({ toy }) => {

    const { handleAlert } = useContext(AuthContext)
    const { _id, name, subCategory, price, quantity } = toy;

    return (
        <tr className="hover">
            <td>{toy?.sellerName}</td>
            <td className="font-bold">{name}</td>
            <td>{subCategory}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <th>
                <Link
                    onClick={handleAlert}
                    to={`/toy/${_id}`}
                >
                    <button className="bg-red-600 text-white px-5  py-2 text-center">View Details</button>
                </Link>
            </th>
        </tr>
    );
};

export default AllToyRow;