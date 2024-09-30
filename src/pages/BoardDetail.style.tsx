import { css } from '@emotion/react';



export const detailCss = css`
 .animated-line {
    position: relative;
    width: 0; /* 초기 너비는 0 */
    height: 1.5px;
    background-color: var(--primary-color); /* primary 색상으로 설정 */
    opacity: 0.5;
    transition: width 1s ease-in-out;
  }

  .animated-line.show {
    width: 100%; /* 너비를 100%로 설정하여 확장 효과 생성 */
  }
`;

export const contentCss = css`
   
   margin-left : 20%;
   margin-right: 20%;
   
   
   .content {
       line-height: 22pt;
        font-size: 11pt;
        letter-spacing: .8px;
        text-align: left;
        color: rgba(0, 0, 0, 0.75);
        word-wrap : break-word;
        padding-bottom: 120px;
 
   }
    
`;
