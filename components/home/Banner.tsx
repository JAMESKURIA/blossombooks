import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

interface IProps {
  wrapper: {
    children: JSX.Element;
    image: string;
  };
}

const Wrapper: React.FC<IProps["wrapper"]> = ({ children, image }) => {
  return (
    <div className="min-h-[100vh] w-full">
      <Parallax speed={-100}>
        <div className="min-h-[100vh] relative w-full">
          <Image
            src={image}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt="banner image"
          />
        </div>
      </Parallax>

      <div className="absolute bg-primary-dark top-1/2 transform -translate-y-1/2 w-full sm:w-[90%] md:w-[80%] lg:w-1/2">
        {/* display-text */}
        {children}

        {/* logo-icons
        <div className="hidden md:flex absolute top-1/2 right-0 transform  -translate-y-1/2">
          <div className="relative h-56 w-24">
            <Image src={"/logom2.png"} layout="fill" />
          </div>
        </div>
        <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-[105%] -translate-y-1/2">
          <div className="relative h-56 w-24">
            <Image src={"/logom4.png"} layout="fill" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    adaptiveHeight: true,
  };

  return (
    <Slider {...settings}>
      <Wrapper image="/banner1.jpg">
        <div className=" text-secondary-dark tracking-wider font-black p-8 md:p-20 ml-[3%] md:mr-[2%] text-2xl md:text-4xl  leading-snug">
          Lorem ipsum{" "}
          <span className="text-white font-extrabold text-3xl md:text-5xl">
            dolor
          </span>{" "}
          sit amet consectetur{" "}
          <span className="text-white font-extrabold text-3xl md:text-5xl">
            adipisicing elit.
          </span>{" "}
          in their own field by harnessing their{" "}
          <span className="text-white font-extrabold text-3xl md:text-5xl">
            Laborum, voluptate.
          </span>
        </div>
      </Wrapper>
      <Wrapper image="/banner2.jpg">
        <div className=" text-secondary-dark tracking-wider font-black p-8 md:p-20 ml-[3%] md:mr-[2%] text-2xl md:text-4xl  leading-snug">
          Lorem ipsum{" "}
          <span className="text-white font-extrabold text-3xl md:text-5xl">
            dolor
          </span>{" "}
          sit amet consectetur{" "}
          <span className="text-white font-extrabold text-3xl md:text-5xl">
            adipisicing elit.
          </span>{" "}
          in their own field by harnessing their{" "}
          <span className="text-white font-extrabold text-3xl md:text-5xl">
            Laborum, voluptate.
          </span>
        </div>
      </Wrapper>
    </Slider>
  );
};

export default Banner;
