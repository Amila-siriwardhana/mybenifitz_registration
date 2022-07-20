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
      <div className="header-div col-10">
        <div className=" d-flex  justify-content-around align-items-center my-4 mx-5">
          <div className="headerdiv col-md-4 col-xs-12">
            <NavLink to={"/build_loyalty_club"} className="headernumber mx-3">
              1
            </NavLink>
            <span className="header-title">Building Loyalty Club</span>
          </div>
          <hr className="horizontal_line" />
          <div className="headerdiv col-md-4 col-xs-12">
            <NavLink to={"/add_business_to_club"} className="headernumber mx-3">
              2
            </NavLink>
            <span>Adding Business to Club</span>
          </div>
          <hr className="horizontal_line" />
          <div className="headerdiv col-md-4 col-xs-12">
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
