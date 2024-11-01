import img from "../images/yu 1@2x (1).png"

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src={img} alt="" />

                <div >
                    <h6>select Location</h6>
                    <p>Lorem ipsum...</p>
                </div>
            </div>

            <div className="nav">
                <a href="#">Search</a>
                <a href="#">Sign in</a>
                <a href="#">cart</a>
            </div>
        </div>
    )
}

export default Header;
