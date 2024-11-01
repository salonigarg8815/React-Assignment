import Button from '../components/Button'
import React from 'react'


const BurgerCard = ({ details }) => {

    return (
        <div className="BurgerCard">
            <img src={details.img} alt="burderCard" />
            <div className="content">
                <h4>{details.title}</h4>
                <p>{details.price}</p>
                <Button btn="Order Now" />
            </div>
        </div>

    )
}

export default BurgerCard
