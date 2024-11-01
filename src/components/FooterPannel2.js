import React from 'react'

const FooterPannel2 = ({ footerData }) => {
    console.log(footerData)

    const { title, desc, location, contact, time } = footerData
    return (
        <div className="footer2">
            <h5>{title}</h5>
            <p>{desc}</p>
            <h6>{location}</h6>
            <h5>{contact}</h5>
            <p>{time}</p>
        </div>
    )
}

export default FooterPannel2
