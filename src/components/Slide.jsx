import { NavLink } from "react-router-dom"
import { SwiperSlide } from "swiper/react"


export const Slide = ({title}) =>{
    return (
        // border border-solid border-sky-600
        <>
        <SwiperSlide className = "flex place-items-center  hover:bg-sky-700 hover:text-white rounded " >
            <NavLink>{title}</NavLink>
        </SwiperSlide>
        </>
    )
}