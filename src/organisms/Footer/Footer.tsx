import {motion} from "framer-motion";
import {Link, useNavigate} from "react-router-dom";
import Logo from "../../assets/logo2.svg";

const Footer = () => {

    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1); // 이전 페이지로 이동
    };

    return (
        <>

            <div className="border-b-[1.5px] border-primary opacity-50 w-full mb-10 mt-52"/>

            <div className="flex items-center justify-center ">

                <motion.div
                    whileHover={{scale: 1.1}} // 마우스 오버 시 애니메이션
                    transition={{type: 'spring', stiffness: 300}}
                    className="mb-10 w-72 h-20  flex items-center justify-center"
                >
                    <div className="flex items-center cursor-pointer"  onClick={handleBackClick}>
                        <img src={Logo} alt="logo" className="w-30 h-24"/>
                        <div className="" style={{fontFamily: 'DungGeunMo'}}>Back to memories</div>
                    </div>

                </motion.div>
            </div>


        </>
    )

}
export default Footer;