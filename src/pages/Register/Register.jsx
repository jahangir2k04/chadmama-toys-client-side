import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {

    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();

    const handleRegister = event => {
        event.preventDefault();
        setError('');
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        if (!/(?=.*[A-Z])(?=.*[@$!%*?&]){8,}/.test(password)) {
            setError('Password must be 8 characters with one uppercase letter and special character.');
            return;
        }

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                // console.log(createdUser);
                updateUserProfile(createdUser, name, photo)
                    .then(() => {
                        navigate(from, {replace: true});
                    })
                    .catch(error => {
                        setError(error.message);
                    })
            })
            .catch(error => setError(error.message))
    }

    const handleAccepted = event => {
        setAccepted(event.target.checked)
    }

    return (
        <div className="bg-red-50 py-5">
            <div className='m-4 rounded-lg md:w-2/5 md:mx-auto p-6 md:p-12 shadow-2xl bg-white'>
                <h3 className='mb-6 text-3xl md:text-4xl font-bold text-center'>Please Register</h3>
                <form onSubmit={handleRegister}>
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
                        <p className='mb-8 text-red-800'>{error}</p>
                    </div>

                    <input className='w-full btn normal-case bg-[#ce0000] border-none hover:bg-[#ce0000] rounded-lg h-12 font-bold text-xl text-white' type="submit" value="Register" disabled={!accepted} />
                </form>

                <p className='mt-6 text-center text-xl'>
                    Already Have An Account? <Link to='/login' className='text-[#ce0000] font-bold'> Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;