import React from "react";
import guide from "../assets/images/svg/guide.svg";
import arrow from "../assets/images/svg/arrow.svg";
import location_icon from "../assets/images/svg/location.svg";
import profile from "../assets/images/svg/profile-2user.svg";
import calendar from "../assets/images/svg/calendar-2.svg";

function Feature() {
  return (
    <>
      <div className="transform">
        <div className="container myContainer">
          <div className="d-flex justify-content-around justify-content-md-start">
            <div role="button" className="planeclass Economy">
              <p className="mb-0 ff_MontserratBold fs_md fc_black">Economy</p>
            </div>
            <div role="button" className="planeclass business">
              <p className="mb-0 ff_MontserratSemiBold fs_md fc_black text-center">
                Busniness
              </p>
            </div>
            <div role="button" className="planeclass First">
              <p className="mb-0 ff_MontserratReg fc_black fs_md">First</p>
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
                    <img src={profile} alt="" />
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
                    <img src={calendar} alt="" />
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
              <button className="bookNowbtn">Book Now</button>
            </div>
          </div>
        </div>
        <div className="container my_container pt-5 mt-5">
          <h3 className=" text-center fc_black ff_MontserratBold fs_xxl ls_sm pb-5 text-capitalize">
            Our Features
          </h3>
          <div className="row justify-content-center">
            <div className="col-7 col-sm-6 col-lg-3">
              {" "}
              <div className="feature_box mt-4">
                <div className="d-flex flex-column align-items-center">
                  <div className="icon_circle rounded-pill mb-3">
                    <img src={guide} alt="" />
                  </div>
                  <h3 className="ff_MontserratExtraBold fs_lg fc_black mb-2 text-center">
                    Best Guide
                  </h3>
                  <p className="ff_MontserratReg fc_grey fs_sm pb-3 mb-3 text-center">
                    Suspendisse ultrices nibh non cursus sagittis. Morbi dictum
                    consequat ex, quis finibus magna.
                  </p>
                  <div role="button" className="arrow rounded-pill">
                    <img src={arrow} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-7 col-sm-6 col-lg-3">
              <div className="feature_box mt-4 mt-sm-0">
                <div className="d-flex flex-column align-items-center">
                  <div className="icon_circle rounded-pill mb-3">
                    <img src={guide} alt="" />
                  </div>
                  <h3 className="ff_MontserratExtraBold fs_lg fc_black mb-2">
                    More Discount
                  </h3>
                  <p className="ff_MontserratReg fc_grey fs_sm pb-3 mb-3 text-center">
                    Suspendisse ultrices nibh non cursus sagittis. Morbi dictum
                    consequat ex, quis finibus magna.
                  </p>
                  <div role="button" className="arrow rounded-pill">
                    <img src={arrow} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-7 col-sm-6 col-lg-3">
              <div className="feature_box mt-4">
                <div className="d-flex flex-column align-items-center">
                  <div className="icon_circle rounded-pill mb-3">
                    <img src={guide} alt="" />
                  </div>
                  <h3 className="ff_MontserratExtraBold fs_lg fc_black mb-2">
                    Private
                  </h3>
                  <p className="ff_MontserratReg fc_grey fs_sm pb-3 mb-3 text-center">
                    Suspendisse ultrices nibh non cursus sagittis. Morbi dictum
                    consequat ex, quis finibus magna.
                  </p>
                  <div role="button" className="arrow rounded-pill">
                    <img src={arrow} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-7 col-sm-6 col-lg-3">
              <div className="feature_box mt-4 mt-sm-0">
                <div className="d-flex flex-column align-items-center">
                  <div className="icon_circle rounded-pill mb-3">
                    <img src={guide} alt="" />
                  </div>
                  <h3 className="ff_MontserratExtraBold fs_lg fc_black mb-2">
                    Online Support
                  </h3>
                  <p className="ff_MontserratReg fc_grey fs_sm pb-3 mb-3 text-center">
                    Suspendisse ultrices nibh non cursus sagittis. Morbi dictum
                    consequat ex, quis finibus magna.
                  </p>
                  <div role="button" className="arrow rounded-pill">
                    <img src={arrow} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feature;
