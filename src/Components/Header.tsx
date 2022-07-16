import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";

export const Header = () => {
  return (
    <div className="row">
      <div className="col-2 p-0">
        <div className="logo">
          <img className="logo my-3 mx-5" src={logo}></img>
        </div>
      </div>
      <div className="col-10">
        <div className="d-flex justify-content-around align-items-center my-4 mx-5">
          <div className="headerdiv">
            <NavLink to={"/build_loyalty_club"} className="headernumber mx-3">
              1
            </NavLink>
            <span className="">
              Building loyalty club
            </span>
            <span></span>
          </div>
          <hr className="horizontal_line" />
          <div className="headerdiv">
            <NavLink to={"/add_business_to_club"} className="headernumber mx-3">
              2
            </NavLink>
            <span>
              Adding Business to club
            </span>
          </div>
          <hr className="horizontal_line" />
          <div className="headerdiv">
            <NavLink to={"/define_brand"} className="headernumber mx-3">
              3
            </NavLink>
            <span>Define Brand</span>
          </div>
        </div>
      </div>
    </div>
  );
};
