import Button from './Button'
import React from 'react'
import FooterPannel2 from './FooterPannel2'
import footerData from '../utils/footerData'
import img from "../images/yu 1@2x (1).png"

const Footer = () => {
    return (
        <div className="container">
            <div className="row footer">
                <div className="col-md-6 ">
                    <h4> Our Weekly <span>Newsletter</span></h4>
                </div>
                <div className="col-md-3">
                    <input type="email" placeholder='Enter Email Address' />

                </div>
                <div className="col-md-3">
                    <Button btn={"Subscribe"} />
                </div>
            </div>
            <div className="footer-pannel-2 my-5">
                {
                    footerData.map((val, ind) => (<FooterPannel2 footerData={val} key={val} />))
                }
            </div>
            <div className='text-center'>
                <img src={img} alt="logo" />
                <div className='nav2'>
                    <a href="">Home</a>
                    <a href="">Menu</a>
                    <a href="">Page</a>
                    <a href="">About</a>
                    <a href="">Contact Us</a>
                </div>
                <p className='text-muted'>Copyright @ 2024 All right reserved</p>
            </div>
        </div>
    )
}

export default Footer
