import React, { useRef } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Ourservices.css";

import interiortratmentImage from "../image/serviceimage/INTERIOR TREATMENT.jpg";
import exteriortratmentImage from "../image/serviceimage/EXTERIOR TREATMENT.webp";
import airconditionerImage from "../image/serviceimage/AIR CONDITIONER.jpg";
import engineprotectionImage from "../image/serviceimage/ENGINE PROTECTION.jpg";
import headlampImage from "../image/serviceimage/HEADLAMP.jpg";
import windshieldrestorationImage from "../image/serviceimage/WINDSHIELD RESTORATION.jpg";
import washingImage from "../image/serviceimage/WASHING.jpg";
import antirustprotectionImage from "../image/serviceimage/anti rust.jpg";
import creamiccoatingImage from '../image/serviceimage/CREAMIC COATING.jpg';
import lubricationadditiveImage from '../image/serviceimage/PPF.jpg';

const Services = () => {
  const sliderRef = useRef(null); // Reference to the slider

  // Handle "Next" and "Previous" using Slider's API
  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrevious = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: false, // Disable default dots
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2200,
    ref: sliderRef,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          dots: false, // Remove dots for this breakpoint
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: false, // Remove dots for this breakpoint
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.05,
          slidesToScroll: 1,
          arrows: false,
          dots: false, // Remove dots for this breakpoint
        },
      },
    ],
  };

  const services = [
    { imgSrc: washingImage, altText: "", title: "WASH", link: "/foamwash" },
    { imgSrc: lubricationadditiveImage, altText: '', title: 'PAINT PROTECTION FILM', link: '/paintprotectionfilm' },
    { imgSrc: creamiccoatingImage, altText: '', title: 'CERAMIC COATING', link: '/ceramiccoating' },
    { imgSrc: interiortratmentImage, altText: "", title: "INTERIOR TREATMENT", link: "/interiortreatment" },
    { imgSrc: exteriortratmentImage, altText: "", title: "EXTERIOR TREATMENT", link: "/exteriortreatment" },
    { imgSrc: airconditionerImage, altText: "", title: "AIR CONDITIONER", link: "/airconditioner" },
    { imgSrc: engineprotectionImage, altText: "", title: "ENGINE PROTECTION", link: "/engineprotection" },
    { imgSrc: headlampImage, altText: "", title: "HEADLAMP RESTORATION", link: "/headlamprestoration" },
    { imgSrc: windshieldrestorationImage, altText: "", title: "WINDSHIELD RESTORATION", link: "/windshieldrestoration" },
    { imgSrc: antirustprotectionImage, altText: "", title: "ANTI RUST PROTECTION", link: "/antirustprotection" },
  ];

  return (
    <div className="main1">
      <div className="service-head">
        <h1>SERVICES</h1>
        <Slider ref={sliderRef} {...settings}>
          {services.map((service, index) => (
            <div className="service-item" key={index}>
              <Link to={service.link} className="service-link">
                <img src={service.imgSrc} alt={service.altText} />
                <div className="service-content">
                  <h3>{service.title}</h3>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>

      <div className="Services-controls">
        {/* Previous button */}
        <button className="control-button" onClick={handlePrevious}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>

        {/* Next button */}
        <button className="control-button" onClick={handleNext}>
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </div>
  );
};

export default Services;
