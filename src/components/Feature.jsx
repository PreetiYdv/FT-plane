import React from "react";
import Slider from "react-slick";
import guide from "../assets/images/svg/guide.svg";
import arrow from "../assets/images/svg/arrow.svg";
import location_icon from "../assets/images/svg/location.svg";
import profile from "../assets/images/svg/profile-2user.svg";
import calendar from "../assets/images/svg/calendar-2.svg";
import discount from "../assets/images/svg/discount.svg";
import lock from "../assets/images/png/lock.png";
import headphone from "../assets/images/svg/headphone.svg";

function Feature() {
  var settings = {
    dots: false,
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
          slidesToShow: 2,
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
      <div className="transform">
        <div className="container myContainer">
          <div className="d-flex justify-content-around justify-content-md-start">
            <div role="button" className="planeclass Economy">
              <p className="mb-0 ff_MontserratBold fs_md fc_black">Economy</p>
            </div>
            <div role="button" className="planeclass custom-border business">
              <p className="mb-0 ff_MontserratSemiBold fs_md fc_black text-center">
                Busniness
              </p>
            </div>
            <div role="button" className="planeclass First">
              <p className="mb-0 ff_MontserratMed fc_black fs_md">First</p>
            </div>
          </div>
          <div className="info_box">
            <div className="row justify-content-center">
              <div className="col-8 col-sm-6 col-lg-3 pt-sm-0 pt-3 d-flex">
                <div className="d-flex align-items-center justify-content-start gap-2">
                  <div className="circle rounded-pill">
                    <img src={location_icon} alt="location_icon" />
                  </div>
                  <div>
                    <p className="mb-0 ff_MontserratSemiBold fs_md fc_black">
                      Location
                    </p>
                    <p className="mb-0 ff_MontserratReg fc_coolGrey fs_sm">
                      Where are you going?
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-8 col-sm-6 col-lg-3 pt-sm-0 pt-3 d-flex">
                <div className="d-flex align-items-center justify-content-start gap-2">
                  <div className="circle rounded-pill">
                    <img src={profile} alt="profile" />
                  </div>
                  <div>
                    <p className="mb-0 ff_MontserratSemiBold fs_md fc_black">
                      Travelers
                    </p>
                    <p className="mb-0 ff_MontserratReg fc_coolGrey fs_sm">
                      Add guest
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-8 col-sm-6 col-lg-3 pt-lg-0 pt-3 d-flex">
                <div className="d-flex align-items-center justify-content-start gap-2">
                  <div className="circle rounded-pill">
                    <img src={calendar} alt="location_icon" />
                  </div>
                  <div>
                    <p className="mb-0 ff_MontserratSemiBold fs_md fc_black">
                      Check-in
                    </p>
                    <p className="mb-0 ff_MontserratReg fc_coolGrey fs_sm">
                      Add date
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-8 col-sm-6 col-lg-3 pt-lg-0 pt-3 d-flex">
                <div className="d-flex align-items-center justify-content-start gap-2">
                  <div className="circle rounded-pill">
                    <img src={calendar} alt="calendar" />
                  </div>
                  <div>
                    <p className="mb-0 ff_MontserratSemiBold fs_md fc_black">
                      Check-out
                    </p>
                    <p className="mb-0 ff_MontserratReg fc_coolGrey fs_sm">
                      Add date
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-center mt-4">
              <button className="bookNowbtn ff_MontserratBold fs_md">
                Book Now
              </button>
            </div>
          </div>
        </div>
        <div className="container my_container pt-5 mt-5">
          <h3 className=" text-center fc_black ff_MontserratBold fs_xxl ls_sm pb-5 text-capitalize">
            Our Features
          </h3>
          <Slider {...settings}>
            <div className="d-flex justify-content-center">
              <div className="feature_box  mx-3 mt-4">
                <div className="d-flex flex-column align-items-center">
                  <div className="icon_circle rounded-pill mb-3">
                    <img src={guide} alt="guide" />
                  </div>
                  <h3 className="ff_MontserratExtraBold fs_lg fc_black mb-2 text-center">
                    Best Guide
                  </h3>
                  <p className="ff_MontserratReg fc_grey fs_sm pb-3 mb-3 text-center">
                    Suspendisse ultrices nibh non cursus sagittis. Morbi dictum
                    consequat ex, quis finibus magna.
                  </p>
                  <div role="button" className="arrow rounded-pill">
                    <img src={arrow} alt="arrow" />
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <div className="feature_box  mx-3 mt-4 mt-sm-0">
                <div className="d-flex flex-column align-items-center">
                  <div className="icon_circle rounded-pill mb-3">
                    <img src={discount} alt="discount" />
                  </div>
                  <h3 className="ff_MontserratExtraBold fs_lg fc_black mb-2 text-center">
                    More Discount
                  </h3>
                  <p className="ff_MontserratReg fc_grey fs_sm pb-3 mb-3 text-center">
                    Suspendisse ultrices nibh non cursus sagittis. Morbi dictum
                    consequat ex, quis finibus magna.
                  </p>
                  <div role="button" className="arrow rounded-pill">
                    <img src={arrow} alt="arrow" />
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <div className="feature_box  mx-3 mt-4">
                <div className="d-flex flex-column align-items-center">
                  <div className="icon_circle rounded-pill mb-3">
                    <img src={lock} alt="lock" />
                  </div>
                  <h3 className="ff_MontserratExtraBold fs_lg fc_black mb-2 text-center">
                    Private
                  </h3>
                  <p className="ff_MontserratReg fc_grey fs_sm pb-3 mb-3 text-center">
                    Suspendisse ultrices nibh non cursus sagittis. Morbi dictum
                    consequat ex, quis finibus magna.
                  </p>
                  <div role="button" className="arrow rounded-pill">
                    <img src={arrow} alt="arrow" />
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <div className="feature_box  mx-3 mt-4 mt-sm-0">
                <div className="d-flex flex-column align-items-center">
                  <div className="icon_circle rounded-pill mb-3">
                    <img src={headphone} alt="headphone" />
                  </div>
                  <h3 className="ff_MontserratExtraBold fs_lg fc_black mb-2 text-center">
                    Online Support
                  </h3>
                  <p className="ff_MontserratReg fc_grey fs_sm pb-3 mb-3 text-center">
                    Suspendisse ultrices nibh non cursus sagittis. Morbi dictum
                    consequat ex, quis finibus magna.
                  </p>
                  <div role="button" className="arrow rounded-pill">
                    <img src={arrow} alt="arrow" />
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Feature;
