import Banner from "./Banner";
import BurgerImageGallery from "./BurgerImageGallery";
import Feedback from "./Feedback";
import Footer from "./Footer";
import Header from "./Header"
import Menu from "./Menu";
import Quality from "./Quality";
import Serve from "./Serve";

const Body = () => {
    return (
        <div>
            <Header />
            <Banner name={"Best In Town"}
                img={"https://www.shutterstock.com/image-photo/close-tasty-burger-isolated-on-600nw-2494691375.jpg"}
                desc={"Bacon-Potatos-Bbq Sauce"}
            />
            <BurgerImageGallery />
            <Menu />
            <Quality />
            <Banner name={"Delivery"}
                img={"https://media.istockphoto.com/id/1225013303/vector/vector-illustration-of-a-delivery-man-with-face-mask-delivering-an-order-on-a-motorcycle.webp?s=1024x1024&w=is&k=20&c=Gs6sSvOY0bUUIriSgKnm-C_c5eFf1rt3UDs1csdjkQM="}
                desc={"Food delivery is a courier service in which a restaurant, store, or independent food-delivery company delivers food to a customer. An order is typically made either by telephone."} />
            <Serve />
            <Feedback />
            <Footer />
        </div>
    )
}

export default Body;
