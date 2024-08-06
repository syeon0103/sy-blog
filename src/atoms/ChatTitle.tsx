import {useEffect, useState} from "react";
import { motion} from "framer-motion";


const ChatTitle = () => {
    const date = new Date();
    const formatter = new Intl.DateTimeFormat('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const today = formatter.format(date);

    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
    }, []);

    return (

        <div className="flex flex-col justify-center items-center mt-10">
            <motion.div
                initial={{y: 50, opacity: 0}} // 초기 상태: 화면 아래에서 위로 이동 및 투명
                animate={{y: show ? 0 : 50, opacity: show ? 1 : 0}} // 애니메이션 상태: 위로 이동 및 보임
                transition={{duration: 1, ease: "easeOut"}} // 애니메이션 지속 시간과 easing
                exit={{y: 50, opacity: 0}} // exit 애니메이션: 다시 아래로 이동 및 투명
            >
                <div className="w-72 h-14 shadow-lg rounded-2xl bg-gray-50 flex items-center justify-center">
                    <span className=" text-base font-normal" style={{fontFamily: 'CoreDream'}}>📆 {today}</span>
                </div>
            </motion.div>

            <motion.div
                initial={{y: 50, opacity: 0}} // 초기 상태: 화면 아래에서 위로 이동 및 투명
                animate={{y: show ? 0 : 50, opacity: show ? 1 : 0}} // 애니메이션 상태: 위로 이동 및 보임
                transition={{duration: 1, ease: "easeOut"}} // 애니메이션 지속 시간과 easing
                exit={{y: 50, opacity: 0}} // exit 애니메이션: 다시 아래로 이동 및 투명
            >

                <div className="w-72 h-14 shadow-lg mt-3 rounded-2xl bg-gray-50 flex items-center justify-center">
                    <span className=" text-base font-normal" style={{fontFamily: 'CoreDream'}}>🧡수연님이 입장했습니다🧡</span>
                </div>
            </motion.div>
        </div>
)


}

export default ChatTitle;
