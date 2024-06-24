import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { images } from "../../Constants";

const NewsAndSchemes = () => {
  const newsItems = [
    {
      image: "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG5ld3N8ZW58MHx8MHx8fDA%3D",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Veritatis.",
    },
    {
      image: "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG5ld3N8ZW58MHx8MHx8fDA%3D",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Veritatis.",
    },
    {
      image: "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG5ld3N8ZW58MHx8MHx8fDA%3D",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Veritatis.",
    },
    {
      image: "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG5ld3N8ZW58MHx8MHx8fDA%3D",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Veritatis.",
    },
    {
      image: "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG5ld3N8ZW58MHx8MHx8fDA%3D",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Veritatis.",
    },
  ];

  return (
    <div className="bg-neutral-100 py-10 px-6 border-t border-b border-neutral-300">
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">
        News and Schemes
      </h2>
      <p className="text-lg text-gray-600 text-center mb-8 max-w-3xl mx-auto">
          We're proud to collaborate with leading organizations in the education sector to drive innovation and excellence in assessment.
        </p>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        loop={true}
        modules={[Pagination, Navigation]}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 30 },
        }}
        className="py-8"
      >
        {newsItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="px-2">
              <div className="bg-white p-4 rounded-md border border-neutral-300 shadow hover:shadow-lg">
                <img src={item.image} alt={`News ${index + 1}`} className="w-full rounded-md" />
                <p className="mt-4 text-gray-700 text-center font-medium">
                  {item.text}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
    </div>
  );
};

export default NewsAndSchemes;
