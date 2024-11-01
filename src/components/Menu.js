import React, { useState } from 'react'
import MenuItems from './MenuItems'
import MenuCard from './MenuCard'
import menuData from '../utils/menuData'

const allCategories = ["all", ...new Set(menuData.map((item) => item.category))]


const Menu = () => {
    const [cardData, setCardData] = useState(menuData);
    const [categories, setCategories] = useState(allCategories)

    const filterItems = (category) => {

        if (category == "all") {
            return setCardData(menuData)
        }
        const newItems = menuData.filter((item) => item.category === category)
        // console.log(newItems)
        return setCardData(newItems);
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col menu">
                    <h4>Food Items</h4>
                    <h2>Popular <span>Menu</span></h2>
                    <div className="items">
                        <MenuItems filterItems={filterItems} categories={categories} />

                    </div>
                    <div className='menu-card-parent'>
                        {
                            cardData.map((item, index) => (<MenuCard cardData={item} key={index} />))
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu
