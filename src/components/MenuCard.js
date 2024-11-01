
const MenuCard = ({ cardData }) => {
    // console.log(cardData)
    return (
        <div className="menu-card mt-5">
            <div>
                <img src={cardData.img} alt="" />
            </div>
            <div className="card-content">
                <h6>{cardData.category}</h6>
                <p>{cardData.desc}</p>
                <p>Price : {cardData.price}</p>
            </div>

        </div>
    )
}

export default MenuCard
