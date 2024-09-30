import Logo from '../../assets/logo2.svg';
import '../../styles/font.css'
import { Link } from 'react-router-dom';
import {color, motion} from "framer-motion";

const Header = () => {
    return (
        <header id="header" className=" h-28 top-0 left-0 min-h-28 overflow-hidden flex justify-between">
            <div id="headerLogo" className="flex ml-[4.87%] items-center w-[38.2%] h-full ">
                <Link to={`/`}><img src={Logo} alt="logo" className="w-40 h-24"/></Link>
                <div className="flex items-center w-72 h-20">
                    <p className="font-bold text-[14px] w-full selection:backdrop-blur-3xl"
                       style={{fontFamily: 'DungGeunMo'}}>
                        This is the portfolio site of It Product Manager and FE developer Cho Su-yeon. <br/>
                        I imagine, communicate, develop, and together, we sketch tomorrow.
                    </p>
                </div>
            </div>

            <div id="menu" className="flex justify-between items-center w-[50.2%] h-full mr-10"
                 style={{fontFamily: 'DungGeunMo'}}>
                <motion.div whileHover={{scale: 1.2,  color: "#DBE4C9"}}>
                    <Link to={`/work`}>
                        <span className="mx-14 text-lg font-bold">WORK</span></Link>
                </motion.div>
                <motion.div whileHover={{scale: 1.2 ,  color: "#DBE4C9"}}>
                    <Link to={`/profile`}><span className="mx-14 text-lg font-bold">PROFILE</span></Link>
                </motion.div>
                <motion.div whileHover={{scale: 1.2,  color: "#DBE4C9"}}>
                    <Link to={`/log`}><span className="mx-14 text-lg font-bold">LOG</span></Link>
                </motion.div>
                <motion.div whileHover={{scale: 1.2,  color: "#DBE4C9"}}>
                    <Link to={`/review`}><span className="mx-14 text-lg font-bold">REVIEW</span></Link>
                </motion.div>
                <motion.div whileHover={{scale: 1.2,  color: "#DBE4C9"}}>
                    <Link to={`/contact`}><span className="mx-14 text-lg font-bold">CONTACT</span></Link>
                </motion.div>

            </div>

        </header>
    )
}

export default Header;
