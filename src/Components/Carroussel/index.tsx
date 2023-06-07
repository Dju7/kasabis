import left from "../../assets/left.png";
import right from "../../assets/right.png";
import { useState } from "react";

interface CarousselProps {
  pictures: string[];
}

function Caroussel({ pictures }: CarousselProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  const previouSlide = () => {
    setActiveSlide((prevSlide) =>
      prevSlide === 0 ? pictures.length - 1 : prevSlide - 1
    );
  };

  const nextSlide = () => {
    setActiveSlide((prevSlide) =>
      prevSlide === pictures.length - 1 ? 0 : prevSlide + 1
    );
  };

  const showArrows = pictures.length > 1;

  return (
    <div className="relative z-0 h-[415px] w-full my-auto">
      {showArrows && (
        <img
          src={left}
          alt="flèche directionelle"
          className="z-10 absolute top-1/3 left-4 h-20 w-12"
          onClick={previouSlide}
        />
      )}
      <img
        src={pictures[activeSlide]}
        className="w-full h-full object-cover object-center rounded-[25px] z-1"
        alt="décoration intérieure"
      />
      {showArrows && (
        <img
          src={right}
          alt="flèche directionelle"
          className="z-10 absolute top-1/3 right-4 h-20 w-12"
          onClick={nextSlide}
        />
      )}
    </div>
  );
}

export default Caroussel;