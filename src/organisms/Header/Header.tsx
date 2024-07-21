import Logo from '../../assets/logo.svg';

const Header = () => {
    return (
        <header className="w-screen  h-28 top-0 left-0 min-h-28 overflow-hidden">
        <div id="headerLogo" className="flex ml-[4.87%] items-center w-[38.2%] h-full ">
            <img src={Logo} alt="logo" className="w-60 h-28"/>

        </div>

        </header>
    )
}

export default Header;