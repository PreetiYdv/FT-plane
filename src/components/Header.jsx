import React from "react";
import plane from "../assets/images/png/aer.png";

function Header() {
  return (
    <>
      <div className="container myContainer py-5 my-5 overflow-hidden">
        <div className="position-relative">
          <h2 className=" fs_4xl ff_MontserratBlack text_formatting text-center">
            Aviation
          </h2>
          <img src={plane} alt="plane" className="w-100 plane_animation" />
          <div className="shadow"></div>
          <div className="shadow2"></div>
        </div>
        <h3 className="fc_white text-center fs_3xl ff_MontserratBold mb-0 pt-3 text-capitalize">
          Travel around the world
        </h3>
        <p className="fc_lightGrey pt-2 fs_xsm text-center pb-5 mb-5">
          One of the advantages of being disorganized is that one is always
          having surprising discoveries
        </p>
      </div>
    </>
  );
}

export default Header;
