
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Navigation, Autoplay } from 'swiper/modules';
import { TypeAnimation } from 'react-type-animation';

const images = [
  new URL('../assets/images/1.png', import.meta.url).href,
  new URL('../assets/images/2.png', import.meta.url).href,
  new URL('../assets/images/3.png', import.meta.url).href,
  new URL('../assets/images/4.png', import.meta.url).href
];

const Home = () => {
  return (
    <div className="relative h-screen  font-mono">
      <Swiper
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Navigation, Autoplay]}
        className="h-full "
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div data-aos="fade-up" className="relative container  md:ml-16 ml-2 flex flex-col items-start justify-center h-full text-white">
              <h1  className="text-5xl font-bold mb-3">Welcome to Our<br/></h1>
               <TypeAnimation
                  className=" font-bold text-5xl  mb-3 text-red-900"
                  sequence={['Book Store', 2000, 'Book Store', 2000]}
                />
         
               

                <p className=" text-lg">Discover, explore, and fall </p>
                <p className="mb-8 text-lg">in love with books at our bookstore</p>
                <button className="relative shadow-md h-12 w-40 overflow-hidden border border-red-900 font-bold text-white  transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-red-900 before:duration-300 before:ease-out hover:text-white hover:shadow-white hover:before:h-40 hover:before:w-40 hover:before:opacity-80">
      <span className="relative z-10">Order Now</span>
    </button>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Home;
