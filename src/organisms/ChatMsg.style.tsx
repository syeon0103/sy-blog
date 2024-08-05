import { css } from '@emotion/react';

export const msgCss = css`
    max-width: 1200px;
    width: 100%;
    display: flex;
    margin: 0 auto;
    height: 100vh;
    flex-direction : column;
    border-left: solid 3px #DBE4C9;
    border-right:  solid 3px #DBE4C9;
    
    .chatBubble {
        width: 400px;
        height: 100px;
        position: relative;
        border: solid 4px #DBE4C9;
        border-radius: .4em;
    }

    .chatBubble:after {
        content: '';
        position: absolute;
        right: 0;
        top: 50%;
        width: 0;
        height: 0;
        border: 38px solid transparent;
        border-left-color: #DBE4C9;
        border-right: 0;
        border-top: 0;
        margin-top: -19px;
        margin-right: -38px;
    }
    
    
    .chatContainer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 1050px;
        height: 60px;
        position: fixed;
        margin-bottom: 15px;
        margin-left: 30px;
        bottom: 0;
    }

    .chat {
        flex: 1;
        margin-left: 100px;
        height: 100%;
        border-radius: 6px;
        border: solid 2px #DBE4C9;
        outline-color: #FE6B8B;
        padding: 20px;
        line-height: 22pt;
        font-size: 11pt;
        letter-spacing: .8px;
        color: rgba(0, 0, 0, 0.75);
    }
    
    .bubble {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        border: solid 3px #DBE4C9;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 15px;
        
        img {
            width: 45px;
            
        }
        
    }
    
    
    
`;
