import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Client 1",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, quasi. Pariatur, delectus? Sed atque libero nulla commodi ipsum animi laudantium maxime autem! Vitae sunt nesciunt incidunt a dignissimos! Harum, quod?",
  },
  {
    avatar: AVTR2,
    name: "Client 2",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, quasi. Pariatur, delectus? Sed atque libero nulla commodi ipsum animi laudantium maxime autem! Vitae sunt nesciunt incidunt a dignissimos! Harum, quod?",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container test__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="test">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
