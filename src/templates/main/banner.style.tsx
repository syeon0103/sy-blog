import { css } from '@emotion/react';

export const bannerCss = css`
    @keyframes marquee {
        0% {
            transform: translateX(100%);
        }
        100% {
            transform: translateX(-100%);
        }
    }

    .animate-marquee {
        animation: marquee 60s linear infinite;
        white-space: pre;
        font-size: 12px;
        color: #0E0C0C;
        font-weight: bold;
        align-items: center;
        text-align: center;
        
    }
`;
