import React from "react";
import map from "../assets/images/svg/map.svg";
import men from "../assets/images/png/men.png";
import stars from "../assets/images/svg/stars.svg";
import prev_arrow from "../assets/images/svg/prev_arrow.svg";
import next_arrow from "../assets/images/svg/next_arrow.svg";

function Feedback() {
  return (
    <>
      <div className="container myContainer mt-5 pt-5">
        <p className=" fc_blue text-center ff_MontserratSemiBold fs_reg mb-2">
          What’s our customer saying
        </p>
        <h3 className="ff_MontserratBold text-capitalize ls_sm fs_xxl fc_darkBlue mb-5 pb-3 text-center">
          Our Customer Feedback
        </h3>
        <div className="row">
          <div className="col-lg-7 mb-lg-0 mb-4">
            <img src={map} alt="" className="w-100" />
          </div>
          <div className="col-lg-5 d-flex flex-column align-items-center">
            <div className="feedback_box mw_500">
              <div className="d-flex pb-3">
                <img src={men} alt="" className="pe-3" />
                <div>
                  <p className="mb-0 ff_MontserratBold fs_reg fc_darkBlue">
                    Jaylon Vaccaro
                  </p>
                  <img src={stars} alt="" />
                </div>
              </div>
              <p className="ff_MontserratMediumItalic fs_md fc_coalBlack">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don
              </p>
            </div>
            <div className="d-flex justify-content-center gap-3 align-items-center pt-3 mt-3">
              <div className="memories_slider">
                <img src={prev_arrow} alt="" />
              </div>
              <div className="memories_slider">
                <img src={next_arrow} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feedback;
