import React, { useState, useEffect } from "react";
import carousel1 from "../../assets/carousel1.jpeg"
import carousel2 from "../../assets/carousel2.jpeg"
import carousel3 from "../../assets/carousel3.jpeg"
import carousel4 from "../../assets/carousel4.jpeg"
import AboutUsSection from "../../Components/HomeComponents/AboutUsSection.jsx";
import FeaturesSection from "../../Components/HomeComponents/FeaturesSection.jsx";
import KeyStakeholders from "../../Components/HomeComponents/KeyStakeholders.jsx";
import LocationAndContact from "../../Components/HomeComponents/LocationAndContact.jsx";
import NewsAndSchemes from "../../Components/HomeComponents/NewsAndSchemes.jsx";

function Home() {
  const slides = [
    carousel1,
    carousel2,
    carousel3,
    carousel4,
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  const nextSlide = () => {
    if (isSliding) return;
    setIsSliding(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    if (isSliding) return;
    setIsSliding(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    if (isSliding) return;
    setIsSliding(true);
    setCurrentSlide(index);
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => {
      clearInterval(slideInterval);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSliding(false);
    }, 700);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <section className="bg-gray-50">
      <div
        className="relative w-full mt-16 md:mt-0 h-[300px] md:h-[500px] lg:h-[600px]"
        data-carousel="slide"
      >
        <div className="relative overflow-hidden h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
              data-carousel-item={index === currentSlide}
            >
              <img
                src={slide}
                className="absolute block w-full h-full object-cover object-center"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? "bg-white" : "bg-gray-400"
              }`}
              aria-current={index === currentSlide}
              aria-label={`Slide ${index + 1}`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
          onClick={prevSlide}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
          onClick={nextSlide}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AboutUsSection />
        <FeaturesSection />
        <KeyStakeholders />
        <NewsAndSchemes />
        <LocationAndContact />
      </div>
    </section>
  );
}

export default Home;
