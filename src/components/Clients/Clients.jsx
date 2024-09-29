import React, { useRef } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import ClientSlider from './ClientSlider';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AiFillPauseCircle } from "react-icons/ai";
import { Slide } from 'react-awesome-reveal';

let clients = [
    {
        name : "Java",
        img_url : process.env.PUBLIC_URL + '/java.svg',
        stars : 5,
    },
    {
        name : "SpringBoot",
        img_url : process.env.PUBLIC_URL + '/spring.svg',
        stars : 5,
    },
    {
        name : "MicroServices",
        img_url : process.env.PUBLIC_URL + '/micro.svg',
        stars : 5,
    },
    {
        name : "Camunda",
        img_url : process.env.PUBLIC_URL + '/camunda.svg',
        stars : 5,
    },
    {
        name : "Python",
        img_url : process.env.PUBLIC_URL + '/python.svg',
        stars : 4,
    },
    {
        name : "Docker",
        img_url : process.env.PUBLIC_URL + '/Docker.svg',
        stars : 4,
    },
    {
        name : "Langchain",
        img_url : process.env.PUBLIC_URL + '/ai.svg',
        stars : 4,
    },
    {
        name : "HTML5",
        img_url : process.env.PUBLIC_URL + '/html.svg',
        stars : 5,
    }
    ,{
        name : "CSS3",
        img_url : process.env.PUBLIC_URL + '/css.svg',
        stars : 5,
    }
    ,{
        name : "JAVASCRIPT",
        img_url : process.env.PUBLIC_URL + '/js.svg',
        stars : 4,
    }
    ,{
        name : "POSTGRES SQL",
        img_url : process.env.PUBLIC_URL + '/postgre.svg',
        stars : 4,
    }
    ,{
        name : "JQUERY",
        img_url : process.env.PUBLIC_URL + '/jquery.svg',
        stars : 3,
    }
    ,{
        name : "REACTJS",
        img_url : process.env.PUBLIC_URL + '/react.svg',
        stars : 4,
    }
    ,{
        name : "REACT REDUX",
        img_url : process.env.PUBLIC_URL + '/redux.svg',
        stars : 3,
    }
    ,{
        name : "Apache Kafka",
        img_url : process.env.PUBLIC_URL + '/kafka.svg',
        stars : 4,
    }
    ,{
        name : "Redis",
        img_url : process.env.PUBLIC_URL + '/redis.svg',
        stars : 4,
    }
    ,{
        name : "SQL",
        img_url : process.env.PUBLIC_URL + '/sql.svg',
        stars : 4,
    }
    ,{
        name : "MONGO DB",
        img_url : process.env.PUBLIC_URL + '/mongo.svg',
        stars : 3,
    }
    
]
var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]}

const Clients = () => {
    const arrowRef = useRef(null);
    let clientDisc = "";
    clientDisc = clients.map((item, i) => (
        <ClientSlider item={item} key={i}/>
    ))
  return (
    <Container id='skill'>
        <Slide direction="left">
            <span className="green">Experties</span>
            <h1>Skills</h1>
        </Slide>
        <Testimonials>
            <Slider ref={arrowRef} {...settings}>
                {clientDisc}
            </Slider>
            <Buttons>
                <button
                onClick={() => arrowRef.current.slickPrev()}
                ><IoIosArrowBack/></button>
                <button
                onClick={() => arrowRef.current.slickPause()}
                ><AiFillPauseCircle/></button>
                <button
                onClick={() => arrowRef.current.slickNext()}
                ><IoIosArrowForward/></button>
            </Buttons>
        </Testimonials>
    </Container>
  )
}

export default Clients

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 4rem 0;

    @media(max-width:840px){
        width: 90%;
    }

    span{
        font-weight: 700;
        text-transform: uppercase;
    }

    h1{
        padding-top: 1rem;
        text-transform: capitalize;
    }

    .slick-list, .slick-slider, .slick-track{
        padding: 0;
    }

    .slick-dots{
        text-align: left;
        margin-left: 1rem;
    }

    .slick-dots li button:before{
        content: "";
    }

    .slick-dots li button{
        width: 9px;
        height: 4px;
        background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
        padding: 0.1rem;
        margin-top: 1rem;
        transition: all 400ms ease-in-out;
        border-radius: 50px;
    }
    
    .slick-dots li.slick-active button{
        background: #01be96;
        width: 15px;
    }

    .slick-dots li{
        margin: 0;
    }
`

const Testimonials = styled.div`
    margin-top: 2rem;
    position: relative;
`
const Buttons = styled.div`
    position: absolute;
    right: 0.7rem;
    bottom: -2rem;

    button{
        background-color: transparent;
        margin-left: 0.5rem;
        border: none;
        color: #01be96;
        cursor: pointer;
        font-size: 1.1rem;
    }

    @media(max-width:530px){
        display: none;
    }
`