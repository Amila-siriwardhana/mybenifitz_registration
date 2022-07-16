import React from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="row ">
      <div className="col-2 p-0">
        <div className="logo">Logo</div>
      </div>
      <div className="headertipics col-10 d-flex justify-content-between align-items-center pt-5 pb-5 ">
        <div className="headerdiv">
          <span className="headernumber mx-3">1</span>
          <span className="" onClick={() => navigate("/build_loyalty_club")}>
            Building loyalty club
          </span>
          <span></span>
        </div>
        <hr className="horizontalline" />
        <div className="headerdiv">
          <span className="headernumber mx-3">2</span>
          <span onClick={() => navigate("/add_business_to_club")}>
            Adding Business to club
          </span>
        </div>
        <hr className="horizontalline" />
        <div className="headerdiv">
          <span className="headernumber mx-3">3</span>
          <span onClick={() => navigate("/define_brand")}>Define Brand</span>
        </div>
      </div>
    </div>
  );
};
