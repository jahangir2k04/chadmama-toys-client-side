
const GalleryInfo = ({data}) => {
    return (
        <div>
            <img className="mx-auto w-[350px] h-[220px] md:h-[205px] transition duration-700 transform hover:-translate-y-2" src={data.img} />
        </div>
    );
};

export default GalleryInfo;