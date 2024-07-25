import { css } from '@emotion/react';

export const lineCss = css`
    
    .line {
        width: 50px;
        border: 1px solid pink; 
        transition: width 500ms cubic-bezier(0.250, 0.460, 0.450, 0.940);
    }

    div:hover {
        width:100%;
    }


`;
