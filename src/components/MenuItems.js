import React from 'react'


const MenuItems = ({ filterItems, categories }) => {
    console.log(filterItems)
    console.log(categories)
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-8">
                    <div className="menu-item">

                        {/* <img src="https://img.freepik.com/free-vector/colorful-round-tasty-pizza_1284-10219.jpg" alt="pizza" /> */}
                        {
                            categories.map((catg) => {
                                return (
                                    <button onClick={() => filterItems(catg)}>{catg}</button>
                                )
                            })
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MenuItems
