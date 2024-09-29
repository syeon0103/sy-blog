import { css } from '@emotion/react';


export const mainCss = css`
    margin : 0 auto;
    width: 100%;
    max-width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;


export const bubbleCss = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 800px;
    height: 100vh;
    
    .ball {
        animation: float 3.5s ease-in-out infinite;
        height: 200px;
        width: 200px;
        border-radius: 50%;
        position: relative;

        background: radial-gradient(
                circle at 75% 30%,
                white 5px,
                aqua 8%,
                darkblue 60%,
                aqua 100%
        );
        box-shadow: inset 0 0 20px #fff, inset 10px 0 46px #eaf5fc,
        inset 88px 0px 60px #c2d8fe, inset -20px -60px 100px #fde9ea,
        inset 0 50px 140px #fde9ea, 0 0 90px #fff;
    }

    @keyframes float {
        0% {
            transform: translatey(0px);
        }
        50% {
            transform: translatey(-80px);
        }
        100% {
            transform: translatey(0px);
        }
    }

    .shadow {
        background: #b490b2;
        width: 150px;
        height: 40px;
        top: 40%;
        animation: expand 4s infinite;
        position: absolute;
        border-radius: 50%;
    }
    @keyframes expand {
        0%,
        100% {
            transform: scale(0.5);
        }

        50% {
            transform: scale(1);
        }
    }

    @media only screen and (max-width: 500px) {
        .ball {
            animation: float 4.5s ease-in-out infinite;
            height: 120px;
            width: 120px;

            background: radial-gradient(
                    circle at 65% 35%,
                    white 5px,
                    aqua 15%,
                    darkblue 50%,
                    aqua 100%
            );
            box-shadow: inset 0 -20px 30px #fff, inset 40px 0 46px #eaf5fc,
            inset 58px 0px 60px #c2d8fe, inset -8px -30px 100px #fde9ea,
            inset 0 20px 110px #fde9ea, 0 0 90px #fff;
        }
        .shadow {
            width: 90px;
            height: 20px;
            top: 78%;
            animation: expand 5s infinite;
        }

        @keyframes float {
            0% {
                transform: translatey(0px);
            }
            50% {
                transform: translatey(-50px);
            }
            100% {
                transform: translatey(0px);
            }
        }
    }


`;
