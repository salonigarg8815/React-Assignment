import Button from "../components/Button"


const Banner = ({ name, img, desc }) => {
    return (
        <div>
            <div className="container banner">
                <div className="row ">
                    <div className="col-6 banner1 pt-4">
                        <h5>{name}</h5>
                        <h2>ENJOY OUR <br />CHICKEN <span>BURGER</span><br /> FAST FOOD</h2>
                        <p>{desc}</p>
                        <div className="price">
                            <Button btn="Order Now" />
                            <span>Price : <label>$10.50</label></span>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <img src={img} alt="Burger" />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
