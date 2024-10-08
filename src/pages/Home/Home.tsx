/** @jsxImportSource @emotion/react */
import spring from '../../assets/icon/cherryBlossom.svg'
import summer from '../../assets/icon/beach.svg'
import fall from '../../assets/icon/leaf.svg'
import winter from '../../assets/icon/snwo.svg'

import good from '../../assets/icon/100.svg'
import bad from '../../assets/icon/bomb.svg'
import thinking from '../../assets/icon/thinkinh.svg'
import mainIcon from '../../assets/icon1.svg'
import mainIcon2 from '../../assets/icon2.svg'

import { mainCss} from "./Home.style.tsx";
import Keyword from "../../atoms/Keyword.tsx";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import Auth from "../../api/Auth.tsx";

const Home = () => {

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
    ]

    const [selectedKeyword1 , setSelectedKeyword1] = useState('');
    const [selectedKeyword2 , setSelectedKeyword2] = useState('');

    const [token, setToken] = useState<string | null>(null);


    useEffect(() => {
        const hash = window.location.hash;

        let _token = null;

        if (hash) {
            const params = new URLSearchParams(hash.replace('#', ''));
            _token = params.get('access_token');
            window.location.hash = '';
        }
        if(!localStorage.getItem('spoti-token')) {
            console.log("localStorage.getItem('spoti-token')21111111111111111111111111:::" , localStorage.getItem('spoti-token'))

            Auth();
            setToken(localStorage.getItem('spoti-token'));
        } else {
            console.log("localStorage.getItem('spoti-token')22222222222222222:::" , localStorage.getItem('spoti-token'))
           // Auth();
            setToken(localStorage.getItem('spoti-token'));
        }

        if(_token) {
            console.log("_token12112313312132",_token )
            setToken(_token);
            localStorage.setItem('spoti-token', _token);
        }


    }, []);


    useEffect(() => {
/*
        const TOKEN_EXPIRY = 60 * 60 * 1000;

        const checkToken = () => {
            const token = localStorage.getItem('spoti-token');
            const expiryTime = localStorage.getItem('spoti-token-expiry');

            // 현재 시간
            const currentTime = new Date().getTime();

            // 토큰이 없거나 만료된 경우
            if (!token || !expiryTime || currentTime > expiryTime) {
                console.log("Token is missing or expired.");
                Auth();
            } else {
                console.log("Valid token found:", token);
            }
        };*/



        if(!localStorage.getItem('spoti-token')) {
            console.log("localStorage.getItem('spoti-token'):::" , localStorage.getItem('spoti-token'))

            Auth();
            setToken(localStorage.getItem('spoti-token'));
        } else {
            console.log("localStorage.getItem('spoti-token'):::" , localStorage.getItem('spoti-token'))

        }

            //Auth();

    }, []);


    return (

        <div className="bg-[#e9e8ed] w-full min-h-screen flex flex-col  gap-5 p-3">
            <div css={mainCss}>
                <div className="flex flex-row items-center justify-center">
                    {/*    <div className="text-gray-700 font-normal font-pretendard sm:text-2xl md:text-2xl text-4xl ">
                    <p> 뚜플리</p>
                </div>*/}
                    <img src={mainIcon} className="w-10 h-14 animate-bounce"/>
                    <span className="font-pretendard mx-8 text-xl text-charry font-semibold">뚜플리</span>
                    <img src={mainIcon2} className="w-16 h-12 mt-16 animate-bounce"/>
                    {/* <Lottie animationData={book} loop={true} autoplay={true} className="w-48 sm:w-28"/>*/}
                </div>

                <div className="flex w-full mt-6 justify-center font-pretendard text-sm font-light">
                    <div className=" w-[600px] text-gray-500">
                        <p>각 주제별 키워드를 하나씩 선택한 후 버튼을 클릭해 주세요!</p>
                        <p>저만의 음악, 책, 영화를 추천해드려요💖</p>
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
                                <span className="text-2xl text-charry font-pretendard">계절별</span>
                            </div>
                        </div>

                        <div className="flex mt-5 ">
                            <div
                                className={`w-0.5 bg-charry mx-3 ${keyword1.length ? 'h-[calc(12rem+1rem*' + keyword1.length + ')]' : 'h-12'}`}></div>
                            <div className="flex flex-wrap">
                                {keyword1.map((key, index) => (
                                    <div className="mb-3" onClick={() => setSelectedKeyword1(key.title)}>
                                        <Keyword key={index} title={key.title} icon={key.icon as string}
                                                 isSelected={selectedKeyword1 === key.title}/>
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
                                    <div className='mb-3' onClick={() => setSelectedKeyword2(key.title)}>
                                        <Keyword key={index} title={key.title} icon={key.icon as string}
                                                 isSelected={selectedKeyword2 === key.title}/>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10">
                    <Link to={`/playList?keyword1=${selectedKeyword1}&keyword2=${selectedKeyword2}`}
                          state={{token: token}}>
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
