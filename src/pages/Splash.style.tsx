import { css } from '@emotion/react';


export const wrapCss = css`
     width: 100vw;
     height: 100vh;
     display: flex;
     flex-direction : column;
     justify-content: center;
     align-items: center; 

`;

export const splashCss = css`
    display : flex;
    justify-content: center;
    
       img {
        width: 100px; 
        animation: spin 5s linear infinite;
        }
      
              @keyframes spin {
                0% {
                  transform: rotate(0deg); /* 초기 상태 */
                }
                100% {
                  transform: rotate(360deg); /* 회전 끝 상태 */
               }
           }
  
`;
export const mentCss = css`
   width: 100vw;
   display : flex;
   justify-content: center;
  font-size: 24px; 
  margin-top: 20px; 
  position: relative; 
   
   #cursor {
          border-left: 2px solid #000; 
          animation: blink 0.7s infinite;
          display: inline-block;
          margin-left: 2px;
          margin-top : 5px;
          height: 25px; 
          vertical-align: middle;
   }
    
    @keyframes blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
    

`;
