import React from "react";
import air_delivery from "../assets/images/svg/Air Delivery.svg";
import ticket from "../assets/images/svg/ticket.svg";
import prev_arrow from "../assets/images/svg/prev_arrow.svg";
import next_arrow from "../assets/images/svg/next_arrow.svg";

function Tickets() {
  return (
    <>
      <div className="container myContainer py-5">
        <div className="row">
          <div className="col-lg-6 pe-lg-5 d-flex flex-column align-items-lg-start align-items-center">
            <h2 className=" fc_white ff_MontserratBold fs_xxl pt-4 ls_sm text-capitalize text-center text-lg-start">
              Book Popular Flight Tickets
            </h2>
            <p className="fc_light ff_MontserratReg fs_sm pb-4 pt-3 text-center text-lg-start">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </p>
            <img src={air_delivery} alt="earth" className="w-100 mw_315" />
          </div>
          <div className="col-lg-6">
            <div className="d-flex justify-content-center flex-column flex-md-row align-items-center">
              <img src={ticket} alt="ticket" className="w-100 pe-lg-4 mw_450" />
              <div className="d-flex flex-md-column justify-content-between align-items-center gap-3 flex-row mt-5 mt-md-0 ms-md-4 ps-md-2">
                <div className="mt-md-5 pt-md-5 d-flex flex-md-column gap-1">
                  <div className="dots rounded-pill"></div>
                  <div className="dots rounded-pill"></div>
                  <div className="dots rounded-pill"></div>
                  <div className="dots rounded-pill"></div>
                  <div className="dots rounded-pill"></div>
                  <div className="dots rounded-pill"></div>
                </div>
                <div className="border_right"></div>
                <div className="mb-md-4 d-flex flex-md-column">
                  <div className="slider_arrow mb-1">
                    <img src={prev_arrow} alt="prev_arrow" />
                  </div>
                  <div className="slider_arrow mt-md-2">
                    <img src={next_arrow} alt="next_arrow" />
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

export default Tickets;
