import img1 from '../assets/img/1.jpg';
import img2 from '../assets/img/2.jpg';
import img3 from '../assets/img/3.jpg';
import img4 from '../assets/img/4.jpg';
import img5 from '../assets/img/5.jpg';
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import {lineCss} from "./BoardList.style.tsx";

const BoardList = () => {

    const imgList = [img1, img2, img3, img4, img5];

    function onHover() {
        return undefined;
    }

    return (
        <>
            <div className="w-full h-[1500px] border-4 border-black">
                <div id="titleArea" className="w-full h-20 mt-10 ml-20">
                    <motion.div animate={{y: -20}}
                                transition={{ease: "easeOut", duration: 2}}>
                        <svg width="400" height="140" viewBox="0 0 600 140">
                            <text
                                x="100" y="90" fill="#B3CCB0"
                                font-size="100" font-family="'Leckerli One', cursive"
                                rotate="4, 8, -8, -4, -20, -24, 48">
                                Life
                            </text>
                        </svg>
                    </motion.div>
                </div>

                <div id="bordList" className="flex flex-row mt-40 ml-32">
                    {imgList.map((img, index) => (


                      <Link to={'/boardWrite'}>
                        <motion.div
                            whileHover={{scale: 1.1, filter: onHover()}}
                            animate={{y: -70}}
                            transition={{ease: "easeOut", duration: 2}}
                            className="relative w-96 h-96 mr-20 border-4 border-primary rounded-lg shadow-lg overflow-hidden"
                        >
                            <img src={img} alt="boardImg"
                                 className="w-full h-full object-cover filter:blur-lg transition duration-500 ease-in-out transform hover:scale-105"/>
                            <div
                                className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-center opacity-0 hover:opacity-100 transition duration-500 ease-in-out">
                                <div className="bg-white bg-opacity-75 p-4 rounded-lg">
                                    <h3 className="text-xl font-bold mb-2">title</h3>
                                    <p>desc</p>
                                </div>
                            </div>
                        </motion.div>
                      </Link>

                    ))}
                </div>

                <div css={lineCss}>
                    <div className="line">

                    </div>
                </div>

            </div>

        </>
    )

}


export default BoardList;
