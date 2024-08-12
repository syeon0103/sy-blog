/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';
import img1 from "../assets/confetti/riize_1.png";
import img2 from "../assets/confetti/riize_2.png";
import img3 from "../assets/confetti/riize_3.png";
import img4 from "../assets/confetti/riize_4.png";
import img5 from "../assets/confetti/riize_5.png";
import img6 from "../assets/confetti/riize_6.png";
import { useState } from "react";

const button = css`
    margin-top: 30px;
    width: 120px;

    .clickBtn {
        border: 2px solid #535bf2;
        border-radius: 3px;
        font-size: 20px;
    }
`;

const confettiCss = css`
    position: relative;
    width: 100vw;
    height: 700px;
    margin-top: 30px;
    
`;

const confetti = (show) => css`
    position: absolute;
    width: 45px;
    height: 50px;
    display: ${show ? 'block' : 'none'};
    animation: ${show ? `explode 5s forwards` : 'none'};
    
    @keyframes explode {
        0% {
            transform: scale(0);
            opacity: 1;
        }
        60%, 90% {
            transform: scale(1.6);
        }
        100% {
            transform: scale(1.2);
            opacity: 0;
        }
        
        
        /*17% {border-bottom-right-radius: 3px;}
        25% {transform: translatey(9px) rotate(22.5deg);}
        50% {transform: translatey(18px) scale(1, 0.9) rotate(45deg); border-bottom-right-radius: 40px;}
        75% {transform: translatey(9px) rotate(67.5deg);}
        100% {transform: translatey(0px) rotate(90deg);}*/
    }
    
`;

const Confetti = () => {
    const imgList = [img1, img2, img3, img4, img5, img6];
    const [show, setShow] = useState(false);

    const getRandomImages = (list, count) => {
        const randomImages = [];
        for (let i = 0; i < count; i++) {
            const randomIndex = Math.floor(Math.random() * list.length);
            randomImages.push(list[randomIndex]);
        }
        return randomImages;
    };

    const getRandomPosition = () => {
        const x = Math.floor(Math.random() * (window.innerWidth - 50));
        const y = Math.floor(Math.random() * (700 - 50));
        return { x, y };
    };

    const imagesToDisplay = getRandomImages(imgList, 80);

    return (
        <>
            <div css={button}>
                <button className="clickBtn" onClick={() => setShow(!show)}>
                    {show ? '없애...' : '컨페티오픈..'}
                </button>
            </div>

            <div css={confettiCss}>
                {imagesToDisplay.map((img, index) => {
                    const { x, y } = getRandomPosition();
                    return (
                        <div
                            key={index}
                            css={confetti(show)}
                            style={{ top: `${y}px`, left: `${x}px` }}
                        >
                            <img src={img} alt="confetti" css={confetti(show)}/>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Confetti;
