import Logo from '../../assets/logo2.svg';
import '../../styles/font.css'

const Header = () => {
    return (
        <header id="header" className="w-screen h-28 top-0 left-0 min-h-28 overflow-hidden  flex justify-between">
            <div id="headerLogo" className="flex ml-[4.87%] items-center w-[38.2%] h-full ">
                <img src={Logo} alt="logo" className="w-40 h-24"/>
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
                <span className="mx-14 text-lg font-bold">WORK</span>
                <span className="mx-14 text-lg font-bold">PROFILE</span>
                <span className="mx-14 text-lg font-bold">LOG</span>
                <span className="mx-14 text-lg font-bold">LIFE</span>
                <span className="mx-14 text-lg font-bold">CONTACT</span>
            </div>

        </header>
    )
}

export default Header;
