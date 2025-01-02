import { Swiper, SwiperSlide } from "swiper/react";
import { LuMenuSquare } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "swiper/css/bundle";

export const SubNavbar = () => {
  const cssStr =
    "border border-solid border-sky-600 rounded hover:bg-sky-700 hover:text-white text-center";
  const cssActive = "bg-sky-700 text-center text-white";
  const [active, setActiveIndex] = useState("accounts");
  const breakpoints = {
    700: {
      slidesPerView: 3.5, // 2 slides for screens >= 640px
      spaceBetween: 20, // 20px space between slides
    },
    1000: {
      slidesPerView: 5.5, // 3 slides for screens >= 768px
      spaceBetween: 30,
    },
    1280: {
      slidesPerView: 7, // 4 slides for screens >= 1024px
      spaceBetween: 20,
    },
  };

  const handleSlideChange = (swiper) => {
    console.log(swiper);
    setActiveIndex(swiper);
  };

  return (
    <>
      <section className="bg-white">
        <div className="py-3 sm:py-2 flex gap-1 justify-start align-middle w-[78%] mx-auto sm:w-[95%] md:w-[80%] lg:w-[80%] xl:w-[80%]">
          <LuMenuSquare className="text-4xl mx-1 lg:hidden xl:hidden" />
          <div className=" bg-sky-70 m-auto w-[100%] sm:w-[89%] md:w-[90%] lg:w-[95%] xl:w-[95%] ">
            <Swiper
              slidesPerView={3.5}
              spaceBetween={10}
              breakpoints={breakpoints}
              cssMode={true}
            >
              <SwiperSlide
                onClick={() => handleSlideChange("accounts")}
                className={`${
                  active === "accounts" ? `${cssStr} ${cssActive}` : cssStr
                }`}
              >
                <NavLink to="/Accounts">Accounts</NavLink>
              </SwiperSlide>
              <SwiperSlide
                onClick={() => handleSlideChange("Science")}
                className={`${
                  active === "Science" ? `${cssStr} ${cssActive}` : cssStr
                }`}
              >
                <NavLink to="/Science">Science</NavLink>
              </SwiperSlide>
              <SwiperSlide
                onClick={() => handleSlideChange("Social")}
                className={`${
                  active === "Social" ? `${cssStr} ${cssActive}` : cssStr
                }`}
              >
                <NavLink to="/Social">Social</NavLink>
              </SwiperSlide>
              <SwiperSlide
                onClick={() => handleSlideChange("Mathematic")}
                className={`${
                  active === "Mathematic" ? `${cssStr} ${cssActive}` : cssStr
                }`}
              >
                <NavLink to="/Mathematics">Mathematic</NavLink>
              </SwiperSlide>
              <SwiperSlide
                onClick={() => handleSlideChange("Biology")}
                className={`${
                  active === "Biology" ? `${cssStr} ${cssActive}` : cssStr
                }`}
              >
                <NavLink to="/Biology">Biology</NavLink>
              </SwiperSlide>
              <SwiperSlide
                onClick={() => handleSlideChange("Computers")}
                className={`${
                  active === "Computers" ? `${cssStr} ${cssActive}` : cssStr
                }`}
              >
                <NavLink to="/Computers">Computers</NavLink>
              </SwiperSlide>
              <SwiperSlide
                onClick={() => handleSlideChange("Central")}
                className={`${
                  active === "Central" ? `${cssStr} ${cssActive}` : cssStr
                }`}
              >
                <NavLink to="/central">Central Govt</NavLink>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};
