import React from "react";
import Slider from "react-slick";
import tower from "../assets/images/png/towers.png";
import men_profile from "../assets/images/png/men_profile.png";
import city from "../assets/images/png/city_img.png";
import girl_profile from "../assets/images/png/girl_profile.png";
import building from "../assets/images/png/buildings.png";
import girl_2 from "../assets/images/png/girl2.png";
import burj_khalifa from "../assets/images/png/burj_khalifa.png";
import girl3 from "../assets/images/png/girl3.png";

function Travelers() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 578,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      
    ],
  };

  return (
    <>
      <div className="container myContainer pt-5 mt-5">
        <h2 className=" text-center ls_sm fc_darkBlue text-capitalize fs_xxl ff_MontserratBold mb-5">
          Best travelars of this month  
        </h2>
        <Slider {...settings}>
          <div className=" d-flex pb-5 justify-content-center">
            <div className="travelers_box mx-3 d-flex flex-column justify-content-center align-items-center">
              <img src={tower} alt="tower" className="w-100" />
              <img
                src={men_profile}
                alt="men_profile"
                className="profile_img"
              />
              <h3 className="ff_MontserratBold fs_lg fc_darkBlue text-center mb-1">
                Raju Mullah
              </h3>
              <p className="ff_MontserratSemiBold mb-0 fc_platinum fs_sm">
                @rajumulllah
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div className="travelers_box mx-3 d-flex flex-column justify-content-center align-items-center">
              <img src={city} alt="city" className="w-100" />
              <img
                src={girl_profile}
                alt="men_profile"
                className="profile_img"
              />
              <h3 className="ff_MontserratBold fs_lg fc_darkBlue text-center mb-1">
                Zaire Vetrovs
              </h3>
              <p className="ff_MontserratSemiBold mb-0 fc_platinum fs_sm">
                @zairevetrovs
              </p>
            </div>
          </div>
          <div className=" d-flex justify-content-center">
            <div className="travelers_box mx-3 d-flex flex-column justify-content-center align-items-center">
              <img src={building} alt="building" className="w-100" />
              <img src={girl_2} alt="men_profile" className="profile_img" />
              <h3 className="ff_MontserratBold fs_lg fc_darkBlue text-center mb-1">
                Marcus Dias
              </h3>
              <p className="ff_MontserratSemiBold mb-0 fc_platinum fs_sm">
                @marcusdias
              </p>
            </div>
          </div>
          <div className=" d-flex justify-content-center">
            <div className="travelers_box mx-3 d-flex flex-column justify-content-center align-items-center">
              <img src={burj_khalifa} alt="burj_khalifa" className="w-100" />
              <img src={girl3} alt="men_profile" className="profile_img" />
              <h3 className="ff_MontserratBold fs_lg fc_darkBlue text-center mb-1">
                Zaire Vetrovs
              </h3>
              <p className="ff_MontserratSemiBold mb-0 fc_platinum fs_sm">
                @zairevetrovs
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default Travelers;
