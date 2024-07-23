import { css } from '@emotion/react';

export const catCss = css`
    
    width: 100vw;
    height: 1000px;
    
    
    .cat {
        position: relative;
        display: flex;
        justify-items: center;
        height: 200px;
        width: 200px;
        margin-top : 100px;
        margin-left: 500px;
        align-items: center;
    }

    // Ears

    .ear {
        position: absolute;
        top: -25%;
        height: 60%;
        width: 25%;
        background: #161616;

        // Ear hair

        &::before,
        &::after {
            content: '';
            position: absolute;
            bottom: 24%;
            height: 10%;
            width: 5%;
            border-radius: 50%;
            background:#ffffff;
        }

        &::after {
            transform-origin: 50% 100%;
        }
    }

    .ear--left {
        left: -7%;
        border-radius: 90% 30% 0% 0% / 100% 100% 0% 0%;
        transform: rotate(-15deg);

        &::before,
        &::after {
            right: 10%;
            top: 55%
        }

        &::after {
            transform: rotate(-45deg);
        }
    }

    .ear--right {
        right: -7%;
        border-radius: 30% 70% 0% 0% / 100% 100% 0% 0%;
        transform: rotate(15deg);

        &::before,
        &::after {
            left: 10%;
            top: 55%;
        }

        &::after {
            transform: rotate(45deg);
        }
    }

    // Face

    .face {
        position: absolute;
        height: 100%;
        width: 100%;
        background: #161616;
        border-radius: 50%;
    }

    // Eyes

    .eye {
        position: absolute;
        top: 35%;
        height: 30%;
        width: 31%;
        background: #ffffff;
        border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;

        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            height: 0;
            width: 100%;
            border-radius: 0 0 50% 50% / 0 0 40% 40%;
            background: #161616;
            animation: blink 4s infinite ease-in;
        }

        @keyframes blink {
            0% {
                height: 0;
            }
            90% {
                height: 0;
            }
            92.5% {
                height: 100%;
            }
            95% {
                height: 0;
            }
            97.5% {
                height: 100%;
            }
            100% {
                height: 0;
            }
        }

        // Tips of the eyes

        &::before {
            content: '';
            position: absolute;
            top: 60%;
            height: 10%;
            width: 15%;
            background: #ffffff;
            border-radius: 50%;
        }
    }

    .eye--left {
        left: 0;

        &::before {
            right: -5%;
        }
    }

    .eye--right {
        right: 0;

        &::before {
            left: -5%;
        }
    }

    // Pupils

    .eye-pupil {
        position: absolute;
        top: 25%;
        height: 50%;
        left:30%;
        width: 50%;
        background: #161616;
        border-radius: 50%;
        animation: look-around 4s infinite;

        @keyframes look-around {
            0% {
                transform: translate(0)
            }
            5% {
                transform: translate(15%, -10%)
            }
            10% {
                transform: translate(20%, -20%)
            }
            15% {
                transform: translate(-40%, -35%)
            }
            20% {
                transform: translate(-50%, -35%)
            }
            25% {
                transform: translate(0, 0)
            }
            100% {
                transform: translate(0, 0)
            }
        }

        .eye--left & {
            right: 30%;
        }

        .eye--right & {
            left: 30%;
        }

        // Glare on the pupil

        &::after {
            content: '';
            position: absolute;
            top: 30%;
            right: -5%;
            height: 20%;
            width: 35%;
            border-radius: 50%;
            background: #ffffff;
        }
    }

    // Muzzle

    .muzzle {
        position: absolute;
        top: 60%;
        left: 50%;
        height: 6%;
        width: 10%;
        background: #ffffff;
        transform: translateX(-50%);
        border-radius: 50% 50% 50% 50% / 30% 30% 70% 70%;
    }

    /* General page styling */

    html {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #161616;
    }
`;
