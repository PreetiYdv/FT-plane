import React from "react";
import memories_img1 from "../assets/images/png/memories_img1.png";
import memories_img2 from "../assets/images/png/memories_img2.png";
import memories_img3 from "../assets/images/png/memories_img3.png";
import memories_img4 from "../assets/images/png/memories_img4.png";

function Memories() {
  return (
    <>
      <div className="container myContainer py-5 my-5">
        <h2 className="ff_MontserratBold ls_sm text-capitalize fs_xxl fc_darkBlue text-center">
          Make memories with us
        </h2>
        <div className="row justify-content-center mb-1">
          <div className="col-6 col-sm-4 col-md-3 pt-lg-5 pt-3 px-4">
            <div className="memories_img overflow-hidden">
              <img src={memories_img1} alt="" className="scale1 w-100" />
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3 pt-lg-5 mt-md-4 pt-sm-3 px-4">
            <img src={memories_img2} alt="" className="memories_img w-100" />
          </div>
          <div className="col-6 col-sm-4 col-md-3 pt-lg-5 pt-3 px-4">
            <img src={memories_img3} alt="" className="memories_img w-100" />
          </div>
          <div className="col-6 col-sm-4 col-md-3 pt-lg-5 mt-md-4 pt-sm-3 px-4">
            <img src={memories_img4} alt="" className="memories_img w-100" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Memories;
