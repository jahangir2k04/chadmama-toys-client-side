import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {

    const [accepted, setAccepted] = useState(false);

    const handleAccepted = event => {
        setAccepted(event.target.checked)
    }

    return (
        <div className='m-4 rounded-lg md:w-2/5 md:mx-auto p-6 md:p-12 shadow-2xl'>
        <h3 className='mb-6 text-3xl md:text-4xl font-bold text-center'>Please Register</h3>
        <form >
            <div className='text-xl mb-5'>
                <label htmlFor="">Your Name</label> <br />
                <input className='mt-2 ps-3 border rounded border-slate-400 h-12 w-full' type="text" name="name" required />
            </div>
            <div className='text-xl mb-5'>
                <label htmlFor="">Photo Url</label> <br />
                <input className='mt-2 ps-3 border rounded border-slate-400 h-12 w-full' type="photo" name="photo" />
            </div>
            <div className='text-xl mb-5'>
                <label htmlFor="">Email</label> <br />
                <input className='mt-2 ps-3 border rounded border-slate-400 h-12 w-full' type="email" name="email" required />
            </div>
            <div className='text-xl mb-4'>
                <label htmlFor="">Password</label> <br />
                <input className='mt-2 ps-3 border rounded border-slate-400 h-12 w-full' type="password" name="password" required />
            </div>
            <div>
                <label>
                    <input type="checkbox" onClick={handleAccepted} />
                    <span className='ms-2 text-xl'>
                        {<>Accept <Link className='text-[#ce0000]'>Terms and Condition</Link></>}
                    </span>
                </label>
                <p className='mb-8 text-red-800'>{}</p>
            </div>
            
            <input className='w-full btn normal-case bg-[#ce0000] border-none hover:bg-[#ce0000] rounded-lg h-12 font-bold text-xl text-white' type="submit" value="Register" disabled={!accepted} />
        </form>
       
        <p className='mt-6 text-center text-xl'>
            Already Have An Account? <Link to='/login' className='text-[#ce0000] font-bold'> Login</Link>
        </p>
    </div>
    );
};

export default Register;