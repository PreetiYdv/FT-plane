import React from "react";

function Subscribe() {
  return (
    <>
      <div className="container myContainer py-5">
        <div className="d-flex flex-column  align-items-center justify-content-center">
          <h2 className=" ls_sm text-capitalize fc_darkBlue fs_xxl ff_MontserratBold mw_534 py-3 mb-4 text-center ">
            Subscribe Newsletter & get letest news
          </h2>
          <div className=" position-relative mb-3">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
            />
            <button type="submit" className="subscribe_btn fs_sm ff_MontserratSemiBold fc_white">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Subscribe;
