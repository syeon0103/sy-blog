import {msgCss , chatInputCss} from "./ChatMsg.style.tsx";
import bubble from "../assets/icon/bubble.svg";
import { motion} from "framer-motion";
import SpeechBubble from "../atoms/SpeechBubble.tsx";
import ChatTitle from "../atoms/ChatTitle.tsx";
import {useEffect, useState} from "react";
import ChatInput from "../atoms/ChatInput.tsx";


interface getChatData {
    name : string;
    phone : string;
    email : string;
    content : string;
}

const ChatMsg = () => {
    //스프레드 연산자를 사용해서 현재까지의 버블 내용을 복사함...그래야 내용이 이어지지.
    //그 다음에 새로운 content 내용을 넣어주기 위해 객체를 추가한다. 일단 name이랑 그외는 그대로.

    const [bubbles, setBubbles] = useState<getChatData[]>([]);

    const newBubbles = (newData: getChatData) => {
        setBubbles([...bubbles, newData]);
    }

    return (
        <>
            <div className="w-full border-t-2 border-black">
                <div css={msgCss}>
                    <ChatTitle/>
                    {bubbles.map((item, index) => (
                        <SpeechBubble key={index} name={item.name} phone={item.phone} email={item.email} content={item.content}/>
                    ))}
                </div>
                    <ChatInput getBubbles={newBubbles}/>

            </div>
        </>
    )
}


export default ChatMsg;
