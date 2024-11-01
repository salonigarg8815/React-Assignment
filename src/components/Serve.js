import React from 'react'
import ServeCard from './ServeCard'

const Serve = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4 serve-img">
                    <img src="https://c8.alamy.com/comp/DGF79F/happy-chef-man-showing-food-in-big-pot-in-kitchen-DGF79F.jpg" alt="chef" />
                    <h6>Jane Mila Jon - Chef Officer</h6>

                </div>
                <div className="col-md-8 mt-4 serve-content">
                    <h4>Our Chef</h4>
                    <h2>We Serve <span> Passion </span></h2>
                    <div className="serveCard">
                        <ServeCard img={"https://media.istockphoto.com/id/1206323282/photo/juicy-hamburger-on-white-background.jpg?s=612x612&w=0&k=20&c=K0DxyiChLwewXcCy8aLjjOqkc8QXPgQMAW-vwRCzqG4="}
                            title={"Burger patties"}
                        />
                        <ServeCard img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkRjWtiQ__bHxh7n5pbn8gd4a_uvJgAkiWpw&s"}
                            title={"Vegetable Pizza"}
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Serve
