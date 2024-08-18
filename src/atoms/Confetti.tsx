/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import img1 from "../assets/confetti/riize_1.png";
import img2 from "../assets/confetti/riize_2.png";
import img3 from "../assets/confetti/riize_3.png";
import img4 from "../assets/confetti/riize_4.png";
import img5 from "../assets/confetti/riize_5.png";
import img6 from "../assets/confetti/riize_6.png";
import { useEffect, useState } from "react";

const buttonContainer = css`
   margin-top: 10px;
`;

const button = css`
    z-index: 10;
    
    .clickBtn {
        border: 2px solid #FE6B8B;
        border-radius: 3px;
        font-size: 20px;
        padding: 10px 20px;
        cursor: pointer;
        background: #fff; 
    }
`;

const Confetti = () => {
    const imgList = [img1, img2, img3, img4, img5, img6];
    const [trigger, setTrigger] = useState(false);
    let particles = [];

    const getRandomImages = (list, count) => {
        const randomImages = [];
        for (let i = 0; i < count; i++) {
            const randomIndex = Math.floor(Math.random() * list.length);
            randomImages.push(list[randomIndex]);
        }
        return randomImages;
    };

    const imagesToDisplay = getRandomImages(imgList, 150);

    const pop = () => {
        const button = document.querySelector('.clickBtn');
        const container = document.querySelector('.buttonContainer');
        const buttonRect = button.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        const offsetX = buttonRect.left - containerRect.left;
        //const offsetY = buttonRect.top - containerRect.top;

        for (let i = 0; i < 150; i++) {
            const p = document.createElement('div');
            p.classList.add('particule');
            // p.x = window.innerWidth * 0.5;
            //  p.y = window.innerHeight + (Math.random() * window.innerHeight * 0.3);
            p.x = buttonRect.width / 2;
            p.y =  buttonRect.height / 2;
            p.vel = {
                x: (Math.random() - 0.5) * 18,
                y: Math.random() * -20 - 15
            };
            p.mass = Math.random() * 0.2 + 0.8;
            particles.push(p);
            p.style.transform = `translate(${p.x}px, ${p.y}px)`;
            const size = Math.random() * 15 + 20;
            p.style.width = size + 'px';
            p.style.height = size + 'px';
            const randomImage = imagesToDisplay[Math.floor(Math.random() * imagesToDisplay.length)];
            p.style.backgroundImage = `url(${randomImage})`;
            p.style.backgroundSize = 'cover';
            p.style.position = 'absolute';
            p.style.borderRadius = '50%';
            container.appendChild(p);
        }
    };

    const render = () => {
        for (let i = particles.length - 1; i >= 0; i--) {
            const p = particles[i];
            p.style.transform = `translate3d(${p.x}px, ${p.y}px, 1px)`;

            p.x += p.vel.x;
            p.y += p.vel.y;

            p.vel.y += (0.5 * p.mass);
            if (p.y > (window.innerHeight /5)) {
                p.remove();
                particles.splice(i, 1);
            }
        }
        requestAnimationFrame(render);
    };

    useEffect(() => {
        if (trigger) {
            pop();
            setTimeout(() => {
                render();
            }, 300);
        }
    }, [trigger]);

    return (
        <div css={buttonContainer} className="buttonContainer">
            <div css={button}>
                <button className="clickBtn" onClick={() => setTrigger(!trigger)}>
                    {trigger ? '🧡' : '🤍'}
                </button>
            </div>
        </div>
    );
};

export default Confetti;
