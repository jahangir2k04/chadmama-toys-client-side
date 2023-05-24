import { Rating } from "@smastrom/react-rating";

const FlashSelling = () => {
    return (
        <div className="md:flex bg-red-50 md:p-10 my-10 md:my-5">
            <div className="md:flex items-center gap-14 mx-auto">
                <div>
                    <img className="h-60 md:h-72 me-52 -mt-10" src="/offer.png" alt="" />
                    <div className="ms-52 -mt-10 mb-10">
                        <span className="text-7xl font-extrabold">On</span>
                        <h3 className="text-5xl font-extrabold">Teddy Bear</h3>
                    </div>
                </div>
                <div className="card card-compact mx-auto w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://images.unsplash.com/photo-1543886151-3bc2b944c718?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVkZHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Teddy Bear</h2>
                        <p className="text-lg">Price : $50</p>
                        <div className="flex align-items-center text-lg mb-2">
                            <span className='ms-2 my-auto'>Rating: 4.8  </span>
                            <Rating
                                style={{ maxWidth: 110 }}
                                value={Math.round(4.8)}
                                readOnly
                            />
                        </div>
                        <button className="text-white font-bold text-lg bg-red-600 px-3 py-2 my-5">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlashSelling;