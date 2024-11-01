import React from 'react'

const ServeCard = ({ img, title }) => {
    return (
        <div className='card mt-4 p-4 m-2 card-cont'>
            <img src={img} alt="Burger-patties" />
            <h5>{title}</h5>
            <p>It is a long stablished fact that a reader BBQ food kitchen</p>
            <span>Price : $15.00</span>
        </div>
    )
}

export default ServeCard
