import { Link } from "react-router-dom";

const ToyRow = ({toy, handleDelete}) => {

    const { _id, name, photo, sellerName, sellerEmail, quantity, price, rating } = toy;

    return (
        <tr className="hover">
            <td>
                <div className="avatar">
                    <div className="rounded w-24 h-24">
                        <img src={photo} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            </td>
            <td className="font-bold">{name}</td>
            <td>{sellerName}</td>
            <td>{sellerEmail}</td>
            <td>{price}</td>
            <td>{rating}</td>
            <td>{quantity}</td>
            <th>
                <Link to={`/update-toy/${_id}`}>
                    <button className="bg-red-600 text-white px-5  py-2 text-center">Update</button>
                </Link>
            </th>
            <th>
                <Link onClick={() => handleDelete(_id)}>
                    <button className="bg-red-600 text-white px-5  py-2 text-center">Delete</button>
                </Link>
            </th>
        </tr>
    );
};

export default ToyRow;