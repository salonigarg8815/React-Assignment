import BurgerCard from "./BurgerCard";
import cardData from '../utils/cardData'

const BurgerImageGallery = () => {


    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col BurgerImageGallery">
                    {
                        cardData.map((value, index) => {
                            return <BurgerCard details={value} key={index} />
                        })
                    }


                </div>
            </div>
        </div>
    )
}

export default BurgerImageGallery;
