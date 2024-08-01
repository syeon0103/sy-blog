import { css } from '@emotion/react';

export const lineCss = css`

    .line {
        stroke-dasharray: 711; 
        stroke-dashoffset: 711;
        animation: dash 1.3s linear alternate infinite;
    }

    @keyframes dash {
        0% {
            stroke-dashoffset: 711;
        }
        100% {
            stroke-dashoffset: 0;
        }
    }


`;
