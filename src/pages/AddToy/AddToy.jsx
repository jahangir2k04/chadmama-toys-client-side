import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import useTitle from "../../hooks/useTitle";


const AddToy = () => {

    const { user } = useContext(AuthContext);
    useTitle('Add Toy');

    const handleAddToy = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const subCategory = form.subCategory.value;
        const quantity = form.quantity.value;
        const price = parseInt(form.price.value);
        const rating = form.rating.value;
        const description = form.description.value;

        const newToy = { name, photo, sellerName, sellerEmail, subCategory, quantity, price, rating, description }

        fetch('https://b7a11-toy-marketplace-server-side-jahangir2k04.vercel.app/toys', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newToy)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                toast.success("A toy has been added successfully !", {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 3000
                  });
            }
            form.reset();
        })

    }

    return (
        <div className="max-w-7xl mx-auto px-2 py-20 bg-red-100 space-y-3">
            <h3 className="mb-5 text-5xl text-red-600 font-extrabold text-center">Add a Toy</h3>
            <form onSubmit={handleAddToy}>
                <div className="md:flex gap-10 md:px-24">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span>Toy Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Enter toy name" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span>Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Enter photo URL" className="input input-bordered w-full" required />
                        </label>
                    </div>
                </div>

                <div className="md:flex gap-10 md:px-24">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span>Seller Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="sellerName" defaultValue={user?.displayName} className="input input-bordered w-full" required/>
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span>Seller Email</span>
                        </label>
                        <label className="input-group">
                            <input name="sellerEmail" type="email" defaultValue={user?.email} className="input input-bordered w-full" required/>
                        </label>
                    </div>
                </div>

                <div className="md:flex gap-10 md:px-24">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span>Sub Category Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="subCategory" placeholder="Enter sub-category name" className="input input-bordered w-full" required/>
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span>Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" placeholder="Enter available quantity" className="input input-bordered w-full" required/>
                        </label>
                    </div>
                </div>

                <div className="md:flex gap-10 md:px-24">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span>Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Enter price" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span>Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder="Enter rating" className="input input-bordered w-full" required/>
                        </label>
                    </div>
                </div>

                <div className="md:px-24">
                    <div className="form-control w-full">
                        <label className="label">
                            <span>Detail Description</span>
                        </label>
                        <label className="input-group">
                            <textarea name="description" className="textarea text-base w-full h-32 ps-3 pt-2 " placeholder="Add some description..." required></textarea>
                        </label>

                    </div>
                </div>

                <div className="md:px-24 mx-auto my-8">
                    <input className="btn w-full bg-[#ce0000] hover:bg-[#b90000] border-none" type="submit" value="Add Toy" />
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default AddToy;