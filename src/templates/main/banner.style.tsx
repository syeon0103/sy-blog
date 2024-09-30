import { css } from '@emotion/react';

export const bannerCss = css`
    @keyframes marquee {
        to {
            transform: translateX(-100%);
        }
    }

    .animate-marquee {
        animation: marquee 200s linear infinite;
        white-space: pre;
        font-size: 13px;
        color: #0E0C0C;
        font-weight: bold;
        align-items: center;
        text-align: center;
        
    }
`;
