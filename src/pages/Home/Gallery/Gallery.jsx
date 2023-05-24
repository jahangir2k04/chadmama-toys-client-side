import { useEffect, useState } from "react";
import GalleryInfo from "./GalleryInfo";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Gallery = () => {

    AOS.init({
        duration: 1000
    });
    const [galleryData, setGalleryData] = useState([]);

    useEffect(() => {
        fetch('https://b7a11-toy-marketplace-server-side-jahangir2k04.vercel.app/gallery')
            .then(res => res.json())
            .then(data => {
                setGalleryData(data);
            })
    }, []);

    return (
        <div data-aos="fade-right" className=" my-20 ">
            <h2 className="mb-10 text-4xl font-bold text-center underline underline-offset-8">Toys Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                {
                    galleryData.map(data => <GalleryInfo
                        key={data._id}
                        data={data}
                    ></GalleryInfo>)
                }
            </div>
        </div>
    );
};

export default Gallery;