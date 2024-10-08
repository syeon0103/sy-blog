/*
import {chatInputCss} from "../organisms/ChatMsg.style.tsx";
import {motion} from "framer-motion";
import bubble from "../assets/icon/bubble.svg";
import {useEffect, useState} from "react";
*/


const ChatInput = () => {

    //{getBubbles}
  /*  const [show, setShow] = useState(false);
    const [content, setContent] = useState<string>('')

    const addBubble = () => {
        if(content.trim()) {
            //스프레드 연산자를 사용해서 현재까지의 버블 내용을 복사함...그래야 내용이 이어지지.
            //그 다음에 새로운 content 내용을 넣어주기 위해 객체를 추가한다. 일단 name이랑 그외는 그대로.
            getBubbles( {name: "w뚜뚜", phone: "0101231234", email: "dududu@naver.com", content });

            setContent('')

        }

    }

    const onEnter = (e) => {
        if(e.key === 'Enter') {
            e.preventDefault();
            addBubble();
        }
    }

    const changeContent = (e) => {
        setContent(e.target.value);
    }

    useEffect(() => {
        setShow(true);
    }, []);

    return (

        <div css={chatInputCss}>
            <motion.div
                initial={{y: 50, opacity: 0}} // 초기 상태: 화면 아래에서 위로 이동 및 투명
                animate={{y: show ? 0 : 50, opacity: show ? 1 : 0}} // 애니메이션 상태: 위로 이동 및 보임
                transition={{duration: 1, ease: "easeOut"}} // 애니메이션 지속 시간과 easing
                exit={{y: 50, opacity: 0}} // exit 애니메이션: 다시 아래로 이동 및 투명
            >
                <div className="chatContainer">

                    <input className="chat shadow-lg " onKeyUp={onEnter} onChange={changeContent}
                           value={content} type="text" style={{fontFamily: 'CoreDream'}}>
                    </input>

                    <div className="bubble shadow-lg flex flex-row justify-between">
                        <motion.div
                            whileHover={{scale: 1.2}}
                            transition={{type: 'spring', stiffness: 300}}
                            className=""
                            onClick={addBubble}
                        >
                            <img src={bubble} alt="bubble"/>
                        </motion.div>
                    </div>

                </div>
            </motion.div>
        </div>

    )*/


}

export default ChatInput;
