import React, { useState } from 'react'
import { img1 } from '../utils/constant'
import { img2 } from '../utils/constant'
import { img3 } from '../utils/constant'

const Feedback = () => {
    const [slider, setSlider] = useState(0);

    const data = [img1, img2, img3]

    const handleplus = () => {
        setSlider(slider === data.length - 1 ? 0 : slider + 1)
    }

    const handleminus = () => {
        setSlider(slider === 0 ? data.length - 1 : slider - 1)
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col slider text-center">
                    <h5>Testimonial</h5>
                    <h2>Client <span>Feedback</span></h2>
                    <div className="carousel">
                        <img src={data[slider]} alt="client" />
                        <h6>Christ Deo</h6>
                        <span>🌟🌟🌟🌟</span>
                        <p>“I was so impressed with my breakfast this morning! I tried the Fried Green Tomato Be
                            nedict and my boyfriend got the Crab Cakes Benedict. We both finished our whole plates and were s
                            o impressed with the quality of the food and the short amount of time it took to receive it. Our w
                            aitress was sweet and helpful. I will definitely be back!” – Julia L.</p>

                    </div>
                    <div className="slider-btn">
                        <button onClick={handleplus}> + </button>
                        <button onClick={handleminus}> - </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feedback
