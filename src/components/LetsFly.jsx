import React from "react";
import lets_fly from "../assets/images/png/lets_fly_img.png";

function LetsFly() {
  return (
    <>
      <div className="container myContainer pb-5 mb-5">
        <div className="row">
          <div className="col-lg-6 pe-lg-5 d-flex align-items-center pb-lg-0 pb-4">
            <img src={lets_fly} alt="" className="w-100 me-1" />
          </div>
          <div className="col-lg-6  position-relative">
            <h3 className="ff_MontserratBlack fc_blue fs_reg">Let’s Fly</h3>
            <div className="border_top"></div>
            <p className="mb-4 py-3 ff_MontserratBold fs_xl fc_black">
              It’s one of the leading online flight booking platforms in the
              world
            </p>
            <div className=" position-relative">
              <div className="border_left"></div>
              <div className=" d-flex align-items-center">
                <p className="disc rounded-pill"></p>
                <p className="mb-2">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text
                </p>
              </div>
              <div className=" d-flex align-items-center">
                <p className="disc rounded-pill"></p>
                <p className="mb-2">
                  If you are going to use a passage of Lorem Ipsum
                </p>
              </div>
              <div className=" d-flex align-items-center">
                <p className="disc rounded-pill"></p>
                <p className="mb-2">
                  Lorem Ipsum is therefore always free from repetition, injected
                  humour, or non-characteristic words etc.
                </p>
              </div>
              <div className=" d-flex align-items-center mb-4 pb-3">
                <p className="disc rounded-pill"></p>
                <p className="">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
            </div>
            <button type="submit" className=" bookNowbtn">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LetsFly;
