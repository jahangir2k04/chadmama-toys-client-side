import { useEffect, useState } from "react";
import GalleryInfo from "./GalleryInfo";


const Gallery = () => {

    const [galleryData, setGalleryData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/gallery')
            .then(res => res.json())
            .then(data => {
                setGalleryData(data);
            })
    }, []);

    return (
        <div className=" my-20">
            <h2 className="mb-10 text-red-600 text-4xl font-bold text-center underline underline-offset-8">Toys Gallery</h2>
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