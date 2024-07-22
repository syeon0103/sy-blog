import { css } from '@emotion/react';

export const sliderCss = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;

    .workList {
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        margin-top: 50px;
        width: 100%;
        position: relative;
        transition: transform 0.5s ease-in-out;
    }

    .work {
        flex: 0 0 auto;
        width: 550px;
        height: 550px;
        margin: 0 80px;
        box-sizing: border-box;
        position: relative;
        border-radius: 20px;
        border : 2px solid black;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 20px;
        }
    }

    .center-image {
        width: 600px;
        height: 600px;
        transform: scale(1.1);
        z-index: 3;
    }

    .slide-left, .slide-right {
        transition: transform 0.5s ease-in-out;
    }

    @keyframes slideLeft {
        0% {
            transform: translateX(100%);
        }
        100% {
            transform: translateX(0%);
        }
    }

    @keyframes slideRight {
        0% {
            transform: translateX(-100%);
        }
        100% {
            transform: translateX(0%);
        }
    }
`;
