import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";

export const Header = () => {
  const navigate = useNavigate();
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
            <span className="headernumber mx-3">1</span>
            <span className="" onClick={() => navigate("/build_loyalty_club")}>
              Building loyalty club
            </span>
            <span></span>
          </div>
          <hr className="horizontal_line" />
          <div className="headerdiv">
            <span className="headernumber mx-3">2</span>
            <span onClick={() => navigate("/add_business_to_club")}>
              Adding Business to club
            </span>
          </div>
          <hr className="horizontal_line" />
          <div className="headerdiv">
            <span className="headernumber mx-3">3</span>
            <span onClick={() => navigate("/define_brand")}>Define Brand</span>
          </div>
        </div>
      </div>
    </div>
  );
};
