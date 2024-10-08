import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Auth from '../../api/Auth.tsx';
import Vibrant from 'node-vibrant';
import Book from "../../organisms/playList/Book.tsx";
import musicIcon from '../../assets/icon/music.svg';
import {useLocation} from "react-router-dom";
import Movie from "../../organisms/playList/Movie.tsx";
import mainIcon from "../../assets/icon1.svg";
import mainIcon2 from "../../assets/icon2.svg";

interface keyword {
    key1? : string,
    key2? : string,
}


const PlayList = ( ) => {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    const token = location.state.token;

    console.log("toklocation.state.tokenen:::::::::2313211312" , token)

    const bookList = [];
    const musicList = [];
    const key1 = searchParams.get('keyword1') || '';
    const key2 = searchParams.get('keyword2') || '';

    const keywords: Keyword = {
        key1,
        key2,
    };

    const recommendList_1 = [
        {
            id: 1,
            keyword : '여름',
            book : ['바깥은 여름', '여름의 빌라'] ,
            movie : ['백만엔걸 스즈코' , '괴물', '시간을 달리는 소녀'],
            music : ['메모리즈', 'Be my next', '네가 내 마음에 자리 잡았다']
        },
        {
            id: 2,
            keyword: '겨울',
            book : ['나주에 대하여', '쇼코의 미소'] ,
            movie : ['눈이 부시게' , '쉰들러 리스트', '도깨비'],
            music : ['소행성', 'wish you hell']
        },
    ]

    const recommendList_2 = [
        {
            keyword : '추천',
            book : ['종의 기원', '슬픔을 공부하는 슬픔'] ,
            movie : ['인사이드 아웃2' , '엘리멘탈', '도깨비'],
            music : ['재연', '붐붐베이스', 'love dive']
        },

        {
            keyword: '애매모호',
            book : ['아주 희미한 빛으로도', '눈부신 안부'] ,
            movie : ['택시운전사' ],
            music : ['조깅', '녹아내려요', 'saltwater']
        }
    ]

    useEffect(() => {

        const matchingKeyword = () => {

            const keyword = recommendList_1.map(item => item.keyword);
            const keyword2 = recommendList_2.map(item => item.keyword);

            for (const key of keyword) {
                const filteredBooks = recommendList_1.filter(item => item.keyword === key).map(item => item.book);
                const filteredMusic = recommendList_1.filter(item => item.keyword === key).map(item => item.music);
                if (key == keywords.key1) {
                    bookList.push(...filteredBooks);
                    musicList.push(...filteredMusic);

                }
            }

            for (const key of keyword2) {
                if (key === keywords.key2) {
                    const filteredBooks = recommendList_2.filter(item => item.keyword === key).map(item => item.book);
                    const filteredMusic = recommendList_2.filter(item => item.keyword === key).map(item => item.music);
                    bookList.push(...filteredBooks);
                    musicList.push(...filteredMusic);
                }
            }


        }


        matchingKeyword();


    }, [keywords]);

    const flatMusicList = musicList;

    let randomMusic =''

    useEffect(() => {

       randomMusic = getRandomMusic(musicList.flat());

        console.log("randomMusic:::", randomMusic)

        function getRandomMusic(musicList) {
            if (flatMusicList.length === 0) return null;
            const randomIndex = Math.floor(Math.random() * musicList.length);
            return musicList[randomIndex];
        }


        if(randomMusic) {
            searchTrack(randomMusic, token);
        }



    }, []);






    const [playlists, setPlaylists] = useState<any[]>([]);

  /*  useEffect(() => {
        const hash = window.location.hash;
        console.log("hash:::" , hash)


        let _token = null;

        if (hash) {
            const params = new URLSearchParams(hash.replace('#', ''));
            _token = params.get('access_token');
            window.location.hash = '';
        }

        if(_token) {
            setToken(_token);
        }

        console.log("_token:", _token);

    }, []);

    useEffect(() => {
        if (token) {

        }
    }, [token]);*/

    const [trackName, setTrackName] = useState('');
    const [tracks, setTracks] = useState<any[]>([]);
    const [mainColors, setMainColors] = useState<{ [key: string]: string }>({})

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTrackName(e.target.value);
    };

    const searchTrack = async (trackName: string, token: string) => {

        console.log('token:::' , token)

        try {
            const response = await axios.get(`https://api.spotify.com/v1/search`, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
                params: {
                    q: randomMusic,
                    type: 'track',
                    limit: 1
                }
            });
            console.log("response.data.tracks.items::", response.data.tracks.items)
            setTracks(response.data.tracks.items)
            return response.data.tracks.items; // 검색된 트랙 목록 반환
        } catch (error) {
            console.error('Error searching track:', error);
        }
    };

    const handleSearch = async (trackName: string) => {
        const tracks = await searchTrack(trackName, token);
        // 결과를 UI에 업데이트
    };

   /* const getMainColor = (imageUrl: string) => {
        const img = new Image();
        img.crossOrigin = 'Anonymous'; // CORS 설정
        img.src = imageUrl;

        img.onload = () => {
            console.log("1111111111")
            const colorThief = new ColorThief();
            const rgbColor = colorThief.getColor(img);
            const colorHex = `rgb(${rgbColor[0]}, ${rgbColor[1]}, ${rgbColor[2]})`; // RGB를 HEX로 변환
            console.log('Main color:', colorHex);
            setMainColor(colorHex); // 메인 색상 상태 업데이트
        };
    };*/



    const getMainColor = (imageUrl: string, trackId: string) => {
        const img = new Image();
        img.crossOrigin = 'Anonymous'; // CORS 설정
        img.src = imageUrl;

        img.onload = () => {

          /*  Vibrant.from(imageUrl).getPalette().then((palette) => {
                const colors = [
                    palette.Vibrant?.hex,
                    palette.Muted?.hex,
                    palette.DarkVibrant?.hex,
                    palette.LightVibrant?.hex,
                    palette.DarkMuted?.hex,
                    palette.LightMuted?.hex
                ].filter(Boolean); // 유효한 색상만 필터링

                // 그라데이션 생성
                const gradient = `linear-gradient(135deg, ${colors.join(', ')})`;
                console.log('Gradient:', gradient);

                // 상태 업데이트
                setMainColors((prevGradients) => ({
                    ...prevGradients,
                    [trackId]: gradient || 'transparent',
                }));
            }).catch(err => {
                console.error('Error extracting colors:', err);
            });*/

          Vibrant.from(imageUrl).getPalette().then((palette) => {
                const vibrantColor = palette.Vibrant?.hex;
                console.log('Vibrant color:', vibrantColor);

                setMainColors((prevColors) => ({
                    ...prevColors,
                    [trackId]: vibrantColor || 'transparent', // 기본값 설정
                }));
            }).catch(err => {
                console.error('Error extracting colors:', err);
            });


        };
    };



    /*const fetchPlaylists = async (token: string) => {

        console.log("11111")

        try {
            const response = await axios.get('https://api.spotify.com/v1/me/playlists',
                {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log("response.data.items:::" ,response.data.items)
            setPlaylists(response.data.items);
        } catch (error) {
            console.error('Error fetching playlists:', error);
        }
    };*/

    return (
        <div className="bg-[#e9e8ed] min-h-screen flex flex-col items-center gap-5 p-3">

            <div className="flex flex-row items-center justify-center">
                {/*    <div className="text-gray-700 font-normal font-pretendard sm:text-2xl md:text-2xl text-4xl ">
                    <p> 뚜플리</p>
                </div>*/}
                <img src={mainIcon} className="w-10 h-14 animate-bounce"/>
                <span className="font-pretendard mx-8 text-3xl text-charry font-semibold">뚜플리</span>
                <img src={mainIcon2} className="w-16 h-12 mt-16 animate-bounce"/>
                {/* <Lottie animationData={book} loop={true} autoplay={true} className="w-48 sm:w-28"/>*/}
            </div>

            <div className="flex flex-row  sm:flex-col  md:flex-col">

                <div className="px-4">

                    <div className="font-pretendard text-3xl font-semibold flex flex-row   justify-center mt-10 mb-8 ">
                        <img src={musicIcon as string} alt="musicIcon" className="mr-2"/>
                        <span>Music</span>
                    </div>

                    <div className=" w-full justify-center flex">
                        <ul>
                            {tracks.map((track) => (

                                <div className="w-[400px] rounded-2xl flex justify-center items-center mb-8 " style={{
                                    height: '400px',
                                    backgroundColor: `${mainColors[track.id]}80` || 'transparent'
                                }}>
                                    <li key={track.id}>

                                        <img src={track.album.images[0]?.url} alt={track.name}
                                             className="w-40 h-40 shadow-2xl rounded-2xl mt-10 ml-20"
                                             onLoad={() => getMainColor(track.album.images[0]?.url, track.id)}/>
                                        <p className="font-pretendard text-2xl text-center mt-5 font-semibold">{track.name}</p>
                                        <p className="font-pretendard text-base text-center mt-1"> {track.artists.map(artist => artist.name).join(', ')}</p>
                                        <audio controls className="w-80 mt-3">
                                            <source src={track.preview_url} type="audio/mpeg"/>
                                        </audio>
                                        <div className="font-pretendard text-center mt-6">
                                            <a href={`https://open.spotify.com/track/${track.id}`}
                                               target="_blank"
                                               rel="noopener noreferrer"> 스포티파이에서 들어보세요!
                                            </a>
                                        </div>

                                    </li>
                                </div>
                            ))}

                        </ul>


                    </div>


                </div>


                <div className="mt-10 w-full justify-center flex px-4">
                    <Book list={bookList}/>
                </div>

            </div>


            <div className="mt-10 w-full justify-center flex">
                <Movie
                />
            </div>


            <div className="text-white font-pretendard mt-30 text-sm bottom-0  sm:text-[7px]">
                Copyright © 2024 뚜플리
            </div>


        </div>
    )
}

export default PlayList;
