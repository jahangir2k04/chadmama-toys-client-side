import { useLoaderData } from "react-router-dom";


const UpdateToy = () => {

    const loadedToy = useLoaderData();
    console.log(loadedToy);
   

    // const handleUpdateToy = event => {
        
    // }

    return (
        <div className="max-w-7xl mx-auto px-2 py-20 bg-red-100 space-y-3">
            <h3 className="mb-5 text-5xl text-red-600 font-extrabold text-center">Add a Toy</h3>
            {/* <form >
                <div className="md:flex gap-10 md:px-24">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span>Toy Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" defaultValue={name} className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span>Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" defaultValue={photo} className="input input-bordered w-full" required />
                        </label>
                    </div>
                </div>

                <div className="md:flex gap-10 md:px-24">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span>Seller Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="sellerName" defaultValue={sellerName || ''} className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span>Seller Email</span>
                        </label>
                        <label className="input-group">
                            <input name="sellerEmail" type="email" defaultValue={sellerEmail} className="input input-bordered w-full" required />
                        </label>
                    </div>
                </div>

                <div className="md:flex gap-10 md:px-24">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span>Sub Category Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="subCategory" defaultValue={subCategory} className="input input-bordered w-full" required />
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
                            <input type="text" name="rating" defaultValue={rating} className="input input-bordered w-full" required />
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
            </form> */}
        </div>
    );
};

export default UpdateToy;