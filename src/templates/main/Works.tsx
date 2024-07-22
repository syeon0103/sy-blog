import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {sliderCss} from "./Works.style.tsx";
import MainImg from '../../assets/mainImg.jpg'

const Works = () => {


    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        cssEase : 'linear',
        dote : true
    };

    return (

        <div className="w-screen h-[1000px] border-b-2 border-b-black">
            <div css={sliderCss}>
                <div className="main">
                <Slider {...settings} arrows={true} >
                    <div>
                        <img className="object-cover " src={MainImg} alt="testImg"/>
                    </div>
                    <div>
                        <img className="w-full h-ull object-cover" src={MainImg} alt="testImg"/>
                    </div>
                    <div>
                        <img className="w-full h-ull object-cover" src={MainImg} alt="testImg"/>
                    </div>

                </Slider>
                </div>

            </div>
        </div>
    )


}

export default Works;
