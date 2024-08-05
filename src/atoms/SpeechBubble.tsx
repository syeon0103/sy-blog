import { css } from '@emotion/react';

interface textInfo {
    name : string;
    phone : string;
    email : string;
    content : string;
}


export const bubbleCss = css`
    
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




`;


const SpeechBubble = ({name, phone, email, content} : textInfo) => {


    return (

        <div css={bubbleCss}>
              <div className="chatBubble">{content}</div>
        </div>


    )

}

export default SpeechBubble;
