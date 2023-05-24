
const Additional = () => {
    return (
        <div className="my-16">
            <h3 className="text-4xl font-bold text-center mb-7 underline underline-offset-4">Additional Resources</h3>
            <div className=" grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="bg-red-50 p-10 text-center space-y-2">
                    <img className="mx-auto" src="/deliveryt.svg" alt="" />
                    <h2 className="text-5xl font-extrabold">10$</h2>
                    <h3 className="text-xl font-semibold">Delivery</h3>
                </div>
                <div className="bg-red-50 p-10 text-center space-y-2">
                    <img className="mx-auto" src="/person.svg" alt="" />
                    <h2 className="text-5xl font-extrabold">24/7</h2>
                    <h3 className="text-xl font-semibold">Support</h3>
                </div>
                <div className="bg-red-50 p-10 text-center space-y-2">
                    <img className="mx-auto" src="/group.svg" alt="" />
                    <h2 className="text-5xl font-extrabold">30K+</h2>
                    <h3 className="text-xl font-semibold">Weekly Visited</h3>
                </div>
            </div>
        </div>
    );
};

export default Additional;