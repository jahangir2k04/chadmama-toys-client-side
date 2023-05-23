
const ToyRow = ({toy}) => {

    const { name, photo, sellerName, sellerEmail, quantity, price, rating } = toy;

    return (
        <tr>
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
            <th>Update</th>
            <th>Delete</th>
        </tr>
    );
};

export default ToyRow;