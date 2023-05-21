import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-black px-2 md:px-0 py-10 text-gray-500 px-2">
            <div className="grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-5 text-center md:text-start">
                <div>
                    <img className="w-24 h-24 mx-auto md:mx-0" src="/toy-logo-r.png" alt="" />
                    <h3 className="my-3 text-4xl">Chadmama Toys</h3>
                    <p>Providing reliable services since 1992</p>
                </div>
                <div className='space-y-1'>
                    <h3 className="text-2xl mb-2 md:mb-5">Contact Us</h3>
                    <p>Level-4, 34, Awal Centre, Banani, Dhaka</p>
                    <p>Support: chadmama@toys.com</p>
                    <p>Helpline: 01xxxxxxxxx</p>
                </div>
                <div>
                    <h3 className="text-2xl mb-2 md:mb-5">Follow Us</h3>
                    <div className='flex gap-3 justify-center md:justify-start'>
                        <Link><img className='h-12' src="/public/google.png" alt="" /></Link>
                        <Link><img className='h-12' src="/public/Facebook-logo.png" alt="" /></Link>
                        <Link><img className='h-12' src="/public/twitter.png" alt="" /></Link>
                        <Link><img className='h-12' src="/public/youtube.png" alt="" /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;