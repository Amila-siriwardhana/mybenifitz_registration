import React from 'react'
import { useNavigate } from "react-router-dom";

export const Header = () => {
    const navigate = useNavigate();
    return (

        <div className='row ' >
            <div className='col-2 p-0'>
                <div className="logo">
                    Logo
                </div>
            </div>
            <div className='col-10 d-flex justify-content-around p-0'>
                <div className='' onClick={() => navigate('/build_loyalty_club')} > Building loyalty club </div>
                <div onClick={() => navigate('/add_business_to_club')}>Adding Business to club</div>
                <div onClick={() => navigate('/define_brand')}>Define Brand</div>
            </div>

        </div>

    )
}
