import React from "react";
import air_delivery from "../assets/images/svg/Air Delivery.svg";
import ticket from "../assets/images/svg/ticket.svg";
import prev_arrow from "../assets/images/svg/prev_arrow.svg";
import next_arrow from "../assets/images/svg/next_arrow.svg";
import plane from "../assets/images/svg/plane_img.svg";
import bar_code from "../assets/images/svg/bar_code.svg";

function Tickets() {
  return (
    <>
      <div className="container myContainer py-5 overflow-hidden">
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
          <div className="col-lg-6 mb-5">
            <div className="d-flex justify-content-center flex-column flex-md-row align-items-center">
              <div className="position-relative">
                <img
                  src={ticket}
                  alt="ticket"
                  className="w-lg-100 pe-lg-4 mw_450 ticket_position d-sm-block d-none"
                />
                <div className="ticket">
                  <div className="px_30 pt_30">
                    <div className="d-flex justify-content-between mb-4">
                      <p className=" ff_MontserratMed mb-0 fc_blue fs_md eco_box">
                        Economy Saver
                      </p>
                      <div className="d-flex align-items-center gap-2">
                        <p className=" ff_MontserratSemiBold fs_md fc_black mb-0">
                          UK
                        </p>
                        <img src={plane} alt="" />
                        <p className=" ff_MontserratSemiBold fs_md fc_black mb-0">
                          BD
                        </p>
                      </div>
                    </div>
                    <h4 className="pb-4 ff_MontserratExtraBold fs_md fc_black mb-0">
                      6 Flight Tickets
                    </h4>
                    <div className="d-flex pb-3 gap-3">
                      <div className="w-50">
                        <p className=" ff_MontserratMed fc_ticket fs_sm pb-1 mb-0">
                          Passenger
                        </p>
                        <p className=" ff_MontserratSemiBold fs_md fc_black mb-0">
                          Raju Mullah
                        </p>
                      </div>
                      <div className="w-50">
                        <p className=" ff_MontserratMed fc_ticket fs_sm pb-1 mb-0">
                          Date
                        </p>
                        <p className=" ff_MontserratSemiBold fs_md fc_black mb-0">
                          20 Nov 2022
                        </p>
                      </div>
                    </div>
                    <div className="d-flex pb-3 gap-3">
                      <div className="w-50">
                        <p className=" ff_MontserratMed fc_ticket fs_sm pb-1 mb-0">
                          Flight
                        </p>
                        <p className=" ff_MontserratSemiBold fs_md fc_black mb-0">
                          #5486626661
                        </p>
                      </div>
                      <div className="w-50">
                        <p className=" ff_MontserratMed fc_ticket fs_sm pb-1 mb-0">
                          Gate
                        </p>
                        <p className=" ff_MontserratSemiBold fs_md fc_black mb-0">
                          20 A
                        </p>
                      </div>
                    </div>
                    <div className="d-flex pb-3 gap-3 mb-4">
                      <div className="w-50">
                        <p className=" ff_MontserratMed fc_ticket fs_sm pb-1 mb-0">
                          Class
                        </p>
                        <p className=" ff_MontserratSemiBold fs_md fc_black mb-0">
                          Economy
                        </p>
                      </div>
                      <div className="w-50">
                        <p className=" ff_MontserratMed fc_ticket fs_sm pb-1 mb-0">
                          Seats
                        </p>
                        <p className=" ff_MontserratSemiBold fs_md fc_black mb-0">
                          5B - 11B
                        </p>
                      </div>
                    </div>
                  </div>
                  <hr className="pb-3 line" />
                  <div className="px_30 pb_30">
                    <img src={bar_code} alt="" className="w-100" />
                  </div>
                </div>
              </div>
              <div className="d-flex flex-md-column justify-content-between align-items-center gap-3 flex-row mt-5 pt-4 pt-md-0 mt-md-0 ms-md-5 ps-md-4">
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
