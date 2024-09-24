
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
import spring from '../../assets/icon/cherryBlossom.svg'
import summer from '../../assets/icon/beach.svg'
import fall from '../../assets/icon/leaf.svg'
import winter from '../../assets/icon/snwo.svg'

import good from '../../assets/icon/100.svg'
import bad from '../../assets/icon/bomb.svg'
import lucky from '../../assets/icon/clover.svg'
import heart from '../../assets/icon/heaert.svg'
import thinking from '../../assets/icon/thinkinh.svg'


import flower from '../../assets/animation/bookmark.json'
import book from '../../assets/animation/book.json'
import { motion } from "framer-motion";
import {bookCss} from "./book.style.tsx";
import {bubbleCss, mainCss} from "./Home.style.tsx";
import Keyword from "../../atoms/Keyword.tsx";
import {Link} from "react-router-dom";

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

    const keyword1 = [
        {
            title : '봄',
            icon : spring
        },
        {
            title : '여름',
            icon : summer
        },
        {
            title : '가을',
            icon : fall
        },
        {
            title : '겨울',
            icon : winter
        },

    ]

    const keyword2 = [
        {
            title : '추천',
            icon : good
        },
        {
            title : '비추천',
            icon : bad
        },
        {
            title : '애매모호',
            icon : thinking
        },
        {
            title : '봄',
            icon : spring
        },
        {
            title : '여름',
            icon : summer
        },
        {
            title : '가을',
            icon : fall
        },
        {
            title : '겨울',
            icon : winter
        },
        {
            title : '추천',
            icon : good
        },
        {
            title : '비추천',
            icon : bad
        },
        {
            title : '애매모호',
            icon : thinking
        },
        {
            title : '봄',
            icon : spring
        },
        {
            title : '여름',
            icon : summer
        },
        {
            title : '가을',
            icon : fall
        },
        {
            title : '겨울',
            icon : winter
        },
    ]

    return (

        <div className="bg-[#e9e8ed] w-full min-h-screen flex flex-col items-center gap-5 p-3">
            <div css={mainCss}>
                <div className="flex flex-row items-center justify-center">
                    {/*    <div className="text-gray-700 font-normal font-pretendard sm:text-2xl md:text-2xl text-4xl ">
                    <p> 뚜플리</p>
                </div>*/}
                    <Lottie animationData={book} loop={true} autoplay={true} className="w-48 sm:w-28"/>
                </div>


                <div className="flex w-full justify-center items-center ">
                    <div className=" mt-10 flex flex-col w-[600px] ">

                        <div className="flex ">
                            <button
                                className="border-2 border-charry w-7 h-7 rounded-full flex items-center justify-center">
                                <p className="font-pretendard text-xl text-charry text-center mt-1.5"> ^ </p>
                            </button>

                            <div className="ml-4">
                                <span className="text-2xl text-charry font-pretendard">계절별</span>
                            </div>
                        </div>

                        <div className="flex mt-5 ">
                            <div
                                className={`w-0.5 bg-charry mx-3 ${keyword1.length ? 'h-[calc(12rem+1rem*' + keyword1.length + ')]' : 'h-12'}`}></div>
                            <div className="flex flex-wrap">
                                {keyword1.map((key, index) => (
                                    <div className="mb-3">
                                        <Keyword key={index} title={key.title} icon={key.icon as string}/>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>


                <div className="flex w-full justify-center items-center ">
                    <div className=" mt-10 flex flex-col w-[600px] ">

                        <div className="flex ">
                            <button
                                className="border-2 border-charry w-7 h-7 rounded-full flex items-center justify-center">
                                <p className="font-pretendard text-xl text-charry text-center mt-1.5"> ^ </p>
                            </button>

                            <div className="ml-4">
                                <span className="text-2xl text-charry font-pretendard">알잘딱</span>
                            </div>
                        </div>

                        <div className="flex mt-5 ">
                            <div
                                className={`w-0.5 bg-charry mx-3 ${keyword2.length ? 'h-[calc(12rem+1rem*' + keyword2.length + ')]' : 'h-12'}`}></div>
                            <div className="flex flex-wrap">
                                {keyword2.map((key, index) => (
                                    <div className="mb-3">
                                        <Keyword key={index} title={key.title} icon={key.icon as string}/>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>


                <div className="mt-10">
                    <Link to={`/playList`}>
                        <button type="submit"
                                className=" rounded-full py-2 px-10 bg-gradient-to-b from-white to-charry border border-charry shadow-inner shadow-charryHover drop-shadow false">
                            <span className="text-white font-pretendard text-base font-normal">스까묵기</span>
                        </button>
                    </Link>
                </div>
 
                <div className="text-white font-pretendard mb-8 text-sm bottom-0 fixed sm:text-[7px]">
                    Copyright © 2024 뚜플리
                </div>
            </div>
        </div>
    )
}


export default Home;
