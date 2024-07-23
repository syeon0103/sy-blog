import Header from "../../organisms/Header/Header.tsx";
import Banner from "../../templates/main/Banner.tsx"
import Works from "../../templates/main/Works.tsx"
import Life from "../../templates/main/Life.tsx"
import Log from "../../templates/main/Log.tsx";

const Home = () => {

    return (
        <>
            <Header/>
            <Banner/>
            <Works/>
            <Log/>
            <Life/>

        </>
    )
}



export default Home;
