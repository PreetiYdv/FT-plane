import React, { useState } from "react";
import planeLogo from "../assets/images/svg/plane_logo.svg";
import { TiThMenuOutline } from "react-icons/ti";
import { GrClose } from "react-icons/gr";

function PlaneNavbar() {
  const [toggle, setToggle] = useState(false);

  const shownavBar = () => {
    setToggle(!toggle);
    document.body.classList.toggle("overflow-hidden");
  };

  return (
    <>
      <nav>
        <div className="container myContainer d-flex justify-content-between align-items-center pt-4">
          <a href="#">
            <img src={planeLogo} alt="" />
          </a>
          <div>
            <ul
              className={
                toggle
                  ? "showNav px-0 myNav"
                  : "d-flex gap-5 mb-0 px-0 align-items-center myNav"
              }
            >
              <li>
                <a
                  onClick={shownavBar}
                  href="#LetsFly"
                  className="ff_MontserratSemiBold fs_sm fc_white text-decoration-none"
                >
                  All Flight
                </a>
              </li>
              <li>
                <a
                  onClick={shownavBar}
                  href=""
                  className="ff_MontserratSemiBold fs_sm fc_white text-decoration-none"
                >
                  Schedule
                </a>
              </li>
              <li>
                <a
                  onClick={shownavBar}
                  href=""
                  className="ff_MontserratSemiBold fs_sm fc_white text-decoration-none"
                >
                  Passengers
                </a>
              </li>
              <li>
                <a onClick={shownavBar}
                  href=""
                  className="ff_MontserratSemiBold fs_sm fc_white text-decoration-none"
                >
                  Your Orders
                </a>
              </li>
              <li>
                <button className="ff_MontserratSemiBold fs_sm fc_white">
                  Let’s Fly
                </button>
              </li>
            </ul>
          </div>
          <span onClick={shownavBar} className="nav_btn d-lg-none z-index-50">
            {toggle ? (
              <GrClose className="stroke_white" />
            ) : (
              <TiThMenuOutline className="fc_white" />
            )}
          </span>
        </div>
      </nav>
    </>
  );
}

export default PlaneNavbar;
