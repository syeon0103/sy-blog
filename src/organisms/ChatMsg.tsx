import {msgCss} from "./ChatMsg.style.tsx";
import bubble from "../assets/icon/bubble.svg";
import { motion} from "framer-motion";
import SpeechBubble from "../atoms/SpeechBubble.tsx";

const ChatMsg = () => {

    return (
        <>
            <div className="w-full border-t-2 border-black">
                <div css={msgCss}>

                    <SpeechBubble  name="w뚜뚜" phone="0101231234" email="dududu@naver.com" content="test말풍선입니다리요"/>

                    <div className="chatContainer">

                        <input className="chat shadow-lg " type="text"  style={{fontFamily: 'CoreDream'}}>
                        </input>

                        <div className="bubble shadow-lg flex flex-row justify-between">
                            <motion.div
                                whileHover={{scale: 1.2}}
                                transition={{type: 'spring', stiffness: 300}}
                                className=""
                            >
                                <img src={bubble} alt="bubble"/>
                            </motion.div>
                        </div>

                    </div>





                </div>

            </div>
        </>
)
}


export default ChatMsg;
