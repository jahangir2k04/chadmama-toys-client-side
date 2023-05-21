import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {

    const { error } = useRouteError();

    return (
        <div className="h-screen grid justify-center items-center">
            <div className="text-center ">
                <img className="h-60 md:h-full mx-auto" src="https://img.freepik.com/free-vector/404-error-with-portals-concept-illustration_114360-7870.jpg" alt="" />
                <p className="text-xl md:3xl mb-5">{error?.message}</p>
                <Link to="/" className="bg-[#ce0000] text-white px-4 font-bold text-xl p-2">Back to Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;