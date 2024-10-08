/*
import { css } from '@emotion/react';
import { motion} from "framer-motion";
import {useEffect, useState} from "react";

interface textInfo {
    name : string;
    phone : string;
    email : string;
    content : string;
}


export const bubbleCss = css`

    display: flex;
    justify-content: end;
    margin-right: 50px;
    margin-top : 20px;

    .chatBubble {
        width: 400px;
        min-height: 50px;
        height: auto;
        position: relative;
        background-color: #DBE4C9;
        border: solid 2px #DBE4C9;
        border-radius: .4em;
        padding: 20px;
        word-break: break-all;
        box-sizing: border-box;

        ::selection {
            background-color: #FFD700;
            color: #000000;
        }

    }

    .chatBubble:after {
        content: '';
        position: absolute;
        right: 0;
        top: 20%;
        width: 0;
        height: 0;
        border: 38px solid transparent;
        border-left-color: #DBE4C9;
        border-right: 0;
        border-top: 0;
        margin-top: -11px;
        margin-right: -25px;
    }

`;

*/

const SpeechBubble = () => {

    //{name, phone, email, content} : textInfo

  /*  const [show, setShow] = useState(false);
    useEffect(() => {
        setShow(true);
    }, []);

    return (
        <motion.div
            initial={{y: 50, opacity: 0}} // 초기 상태: 화면 아래에서 위로 이동 및 투명
            animate={{y: show ? 0 : 50, opacity: show ? 1 : 0}} // 애니메이션 상태: 위로 이동 및 보임
            transition={{duration: 1, ease: "easeOut"}} // 애니메이션 지속 시간과 easing
            exit={{y: 50, opacity: 0}} // exit 애니메이션: 다시 아래로 이동 및 투명
        >
            <div css={bubbleCss}>
                <div className="chatBubble shadow-lg" style={{fontFamily: 'CoreDream'}}>{content}</div>
            </div>
        </motion.div>

    )*/

}

export default SpeechBubble;
