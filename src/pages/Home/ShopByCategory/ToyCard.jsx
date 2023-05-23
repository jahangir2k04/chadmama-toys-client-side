import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';


const ToyCard = ({ toy }) => {

    const { _id, name, photo, price, rating } = toy;

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-2xl">
            <figure className="h-[255px]"><img src={photo} /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className='text-lg'>Price : <span className='font-semibold'>${price}</span></p>
                <div className="flex align-items-center text-lg mb-2">
                    <Rating
                        style={{ maxWidth: 110 }}
                        value={Math.round(rating || 0)}
                        readOnly
                    />
                    <span className='ms-2 my-auto'> {rating}</span>
                </div>
                <div className="card-actions ">
                    <Link to={`/toy/:${_id}`} className='bg-[#ce0000] text-white text-lg w-full py-2 text-center  font-bold'> View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;