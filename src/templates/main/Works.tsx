/*
import { sliderCss } from "./Works.style.tsx";
import img1 from '../../assets/img/1.jpg';
import img2 from '../../assets/img/2.jpg';
import img3 from '../../assets/img/3.jpg';
import img4 from '../../assets/img/4.jpg';
import img5 from '../../assets/img/5.jpg';

import { useState, useEffect, useRef } from "react";
*/

const Works = () => {
  /*  const imgList = [img1, img2, img3, img4, img5];
    const [currentIndex, setCurrentIndex] = useState(2); // 초기 인덱스 설정
    const sliderRef = useRef(null);

    function prev() {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? imgList.length - 1 : prevIndex - 1));
    }

    function next() {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imgList.length);
    }

    useEffect(() => {
        if (sliderRef.current) {
            const slideWidth = 100 / imgList.length; // 각 이미지의 너비 비율
            const offset = -((currentIndex - Math.floor(imgList.length / 2)) * slideWidth);
            sliderRef.current.style.transform = `translateX(${offset}%)`;
        }
    }, [currentIndex]);

    return (
        <div className="w-screen h-[40vw] border-b-4 border-b-black">
            <div css={sliderCss}>
                <div className="workList" ref={sliderRef}>
                    {imgList.map((img, index) => (
                        <div
                            className={`work ${index === currentIndex ? 'center-image' : ''}`}
                            key={index}
                        >
                            <span className="font-semibold text-red-400">{index}</span>
                             <img src={img} alt={`Image ${index}`} />
                        </div>
                    ))}
                </div>
            </div>
            <button onClick={prev}>이전</button>
            <button onClick={next}>다음</button>
        </div>
    );*/
}

export default Works;
