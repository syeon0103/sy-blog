import { css } from '@emotion/react';

export const sliderCss = css`
    
    width: 100%;
    margin: 0 auto;
    overflow-x: hidden;
    
    .slick-list .main {
        width:100%;
        height: 100%;
        background-color: pink;
    }
    
     .slick-list{
        margin: 0 -50px;
        height: 1000px;
    }
    
    .slick-list .slick-track {
        width: 100vw;
        height: 1000px;
    }

    .slick-list .slick-center {
        transform: scale(1.1);
        z-index: 1;
    }
    
    .slick-slide{
        height: 850px;
        width: 850px;
        margin: 80px 300px 80px 0;
        border-radius: 20px;
        border: 4px solid #0E0C0C;
    }


`;
