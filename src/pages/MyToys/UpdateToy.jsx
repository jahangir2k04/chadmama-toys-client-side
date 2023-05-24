import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateToy = () => {

    const { _id, name, photo, sellerName, sellerEmail, subCategory, quantity, price, rating, description } = useLoaderData();


    const handleUpdateToy = event => {
        event.preventDefault();
        const form = event.target;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const description = form.description.value;

        const updatedToy = { quantity, price, description };

        Swal.fire({
            title: 'Do you want to update the changes?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Update',
            denyButtonText: `Don't Update`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                fetch(`https://b7a11-toy-marketplace-server-side-jahangir2k04.vercel.app/update-toy/${_id}`, {
                    method: 'PATCH',
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(updatedToy)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount > 0) {
                            Swal.fire('Toy info Updated successfully!', '', 'success')
                        }
                    })

            } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info')
            }
        })



    }


    return (
        <div className="max-w-7xl mx-auto px-2 py-20 bg-red-100 space-y-3">
            <h3 className="mb-5 text-5xl text-red-600 font-extrabold text-center">Update a Toy</h3>
            <form onSubmit={handleUpdateToy}>
                <div className="md:flex gap-10 md:px-24">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span>Toy Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" defaultValue={name} className="input input-bordered w-full" required readOnly />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span>Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" defaultValue={photo} className="input input-bordered w-full" required readOnly />
                        </label>
                    </div>
                </div>

                <div className="md:flex gap-10 md:px-24">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span>Seller Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="sellerName" defaultValue={sellerName || ''} className="input input-bordered w-full" required readOnly />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span>Seller Email</span>
                        </label>
                        <label className="input-group">
                            <input name="sellerEmail" type="email" defaultValue={sellerEmail} className="input input-bordered w-full" required readOnly />
                        </label>
                    </div>
                </div>

                <div className="md:flex gap-10 md:px-24">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span>Sub Category Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="subCategory" defaultValue={subCategory} className="input input-bordered w-full" required readOnly />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span>Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" defaultValue={quantity} className="input input-bordered w-full" required />
                        </label>
                    </div>
                </div>

                <div className="md:flex gap-10 md:px-24">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span>Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" defaultValue={price} className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span>Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" defaultValue={rating} className="input input-bordered w-full" required readOnly />
                        </label>
                    </div>
                </div>

                <div className="md:px-24">
                    <div className="form-control w-full">
                        <label className="label">
                            <span>Detail Description</span>
                        </label>
                        <label className="input-group">
                            <textarea name="description" className="textarea text-base w-full h-32 ps-3 pt-2 " defaultValue={description} required></textarea>
                        </label>

                    </div>
                </div>

                <div className="md:px-24 mx-auto my-8">
                    <input className="btn w-full bg-[#ce0000] hover:bg-[#b90000] border-none" type="submit" value="Add Toy" />
                </div>
            </form>
        </div>
    );
};

export default UpdateToy;