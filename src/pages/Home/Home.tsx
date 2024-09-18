
import Lottie from 'lottie-react';
import book1 from "../../assets/book/book_1.jpg";
import book2 from "../../assets/book/book_2.jpg";
import book3 from "../../assets/book/book_3.jpg";
import book4 from "../../assets/book/book_4.jpg";
import book5 from "../../assets/book/book_5.jpg";
import book6 from "../../assets/book/book_6.jpg";
import book7 from "../../assets/book/book_7.jpg";
import book8 from "../../assets/book/book_8.jpg";
import book9 from "../../assets/book/book_9.jpg";
import flower from '../../assets/animation/bookmark.json'
import { motion } from "framer-motion";
import {bookCss} from "./book.style.tsx";

const Home = () => {

    const images = [
        book1,
        book2,
        book3,
        book4,
        book5,
        book6,
        book7,
        book8,
        book9,
    ];
    const cardsData = images.map((image) => ({
        title: "대온실 수리 보고서",
        description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
        imageUrl: image
    }));

    return (
        <div className="bg-gradient-to-br from-[#CBEBCE] to-[#CDF0EA] w-full min-h-screen flex flex-col items-center gap-5 p-3">
            <div className="mt-10 flex flex-row items-center justify-center">
                <div className="text-gray-700 font-semibold font-seoyun sm:text-2xl md:text-2xl text-4xl ">
                    <p> My lucky</p>
                </div>
                <Lottie animationData={flower} loop={true} autoplay={true} className="w-36 sm:w-28"/>
                <div className="text-gray-700 font-semibold font-seoyun sm:text-2xl md:text-2xl text-4xl ">
                    <p > Book List </p>
                </div>
            </div>


            <div className="flex flex-row justify-center items-center mb-20">
                <div className="grid grid-cols-3 gap-10 sm:grid-cols-1 md:grid-cols-2">
                    {cardsData.map((card, index) => (
                       <div css={bookCss}>
                           <div className="book">
                               <div className="book-cover" style={{backgroundImage: `url(${card.imageUrl})`}}>
                                   <div className="effect"></div>
                                   <div className="light"></div>
                               </div>
                               <div className="book-inside">
                               </div>
                           </div>
                       </div>
                    ))}
                </div>
            </div>

            {/* <Header/>
            <Banner/>
            <Works/>
            <Log/>
            <Life/>*/}
            <div className="text-white font-pretendard mb-8 text-sm">
                Copyright © 2024 My lucky book list
            </div>
        </div>
    )
}


export default Home;
