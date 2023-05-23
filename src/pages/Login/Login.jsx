import { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {

    const [error, setError] = useState('');
    const passwordRef = useRef();
    const { signIn, googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();

    const handleLogin = event => {
        event.preventDefault();
        setError('');
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then( () => {
                // const createdUser = result.user;
                // console.log(createdUser);
                navigate(from, {replace: true});
            })
            .catch(() => setError('Invalid email or password'))
    }

    const handleGoogleSignIn = () => {
        setError('');
        googleSignIn()
        .then( () => {
            // const loggedUser = result.user;
            // console.log(loggedUser);
            navigate(from, {replace: true});
        })
        .catch(() => setError('Something is wrong'))
    }

    const handleShowPassword = () => {
        const passwordType = passwordRef.current.type;
        if (passwordType === 'password') {
            passwordRef.current.type = 'text';
        }
        else {
            passwordRef.current.type = 'password';
        }
    }

    return (
        <div className="max-w-7xl px-2 mx-auto min-h-screen md:flex items-center justify-center ">
            <div className="md:flex items-center gap-10">
                <div className="card-body shadow-2xl bg-base-100 rounded-2xl w-full md:w-[420px]">
                    <form onSubmit={handleLogin}>
                        <div className='text-xl mb-5'>
                            <label htmlFor="">Email</label> <br />
                            <input className='ps-3 mt-2 border rounded border-slate-400 h-12 w-full' type="email" name="email" required />
                        </div>
                        <div className='text-xl mb-5'>
                            <label htmlFor="">Password</label> <br />
                            <input className='ps-3 mt-2 border rounded border-slate-400 h-12 w-full' type="password" name="password" ref={passwordRef} required />
                        </div>
                        <div className='flex'>
                            <label>
                                <input type="checkbox" onClick={handleShowPassword} />
                                <span className='ms-2 text-xl'>
                                    Show password
                                </span>
                            </label>
                        </div>
                        <p className='mb-8 text-red-800'>{error}</p>
                        <input className='btn w-full bg-[#ce0000] border-none hover:bg-[#ce0000] rounded-lg h-12 font-bold text-xl text-white' type="submit" value="Login" />
                        <p className='text-center text-xl my-3'>
                            Don{`'`}t Have An Account?
                            <Link to='/register' className='text-[#ce0000] font-bold'> Register</Link>
                        </p>
                    </form>
                </div>
                <div className="flex md:flex-col items-center gap-2 my-3 md:my-auto">
                    <p className="w-full md:w-1 h-1 md:h-20 bg-[#ce0000]"></p>
                    <span className="text-2xl md:text-5xl font-bold">OR</span>
                    <p className="w-full md:w-1 h-1 md:h-20 bg-[#ce0000]"></p>
                </div>
                <div className="w-full md:w-64">
                    <h2 className="text-xl md:text-4xl font-bold mb-8 text-center md:text-start">Continue With</h2>
                    <Link onClick={handleGoogleSignIn} className='flex gap-2 justify-center items-center  border border-[#ce0000] rounded-lg'>
                        <img className='h-10' src="/google.png" alt="" />
                        <button className='h-12 font-bold text-xl'>Google</button>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default Login;