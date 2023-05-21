// import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Banner = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (

    <div className='mb-10'>
      <Slider {...settings}>
        <div>
          <img className='h-full w-full' src="https://i.ibb.co/jzMDzy9/635870909568063737-Thinkstock-Photos-100029020.jpg" alt="Image 1" />
        </div>
        <div>
          <img className='h-full w-full ' src="https://i.ibb.co/Qjz54CL/Dr-Q9-Zb-ZUc-AAz-Jr-R.jpg" alt="Image 2" />
        </div>
        <div>
          <img className='h-full w-full' src="https://i.ibb.co/pPbDt2D/plush-banner.jpg" alt="Image 3" />
        </div>
      </Slider>
    </div>


    // <Carousel autoPlay={true} interval={2000} infiniteLoop={true}>
    //   <div>
    //     <img className='w-full' src="https://i.ibb.co/jzMDzy9/635870909568063737-Thinkstock-Photos-100029020.jpg" alt="Image 1" />
    //     <p className="legend">Legend 1</p>
    //   </div>
    //   <div>
    //     <img className='w-full' src="https://i.ibb.co/Qjz54CL/Dr-Q9-Zb-ZUc-AAz-Jr-R.jpg" alt="Image 2" />
    //     <p className="legend">Legend 2</p>
    //   </div>
    //   <div>
    //     <img className='w-full' src="https://i.ibb.co/pPbDt2D/plush-banner.jpg" alt="Image 3" />
    //     <p className="legend">Legend 3</p>
    //   </div>
    // </Carousel>
  );
};

export default Banner;