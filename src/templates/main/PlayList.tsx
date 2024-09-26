import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Auth from '../../api/Auth.tsx';
import Vibrant from 'node-vibrant';

const PlayList = () => {

    const [token, setToken] = useState<string | null>(null);
    const [playlists, setPlaylists] = useState<any[]>([]);

    useEffect(() => {
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

            console.log("token:::" ,token)
          //  fetchPlaylists(token);
            console.log("token:::" ,token)
        }
    }, [token]);

    const [trackName, setTrackName] = useState('');
    const [tracks, setTracks] = useState<any[]>([]);
    const [mainColors, setMainColors] = useState<{ [key: string]: string }>({})

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTrackName(e.target.value);
    };

    const searchTrack = async (trackName: string, token: string) => {
        try {
            const response = await axios.get(`https://api.spotify.com/v1/search`, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
                params: {
                    q: trackName,
                    type: 'track',
                    limit: 2
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
        <div className="bg-[#e9e8ed] w-full min-h-screen flex flex-col items-center gap-5 p-3">

            <div>
                <input type="text" value={trackName} onChange={handleInputChange} placeholder="Search for a track..."/>
                <button onClick={() => handleSearch(trackName)}>Search</button>
            </div>

            {!token ? (
                <button onClick={Auth}>Login with Spotify</button>
            ) : (

                <>
                    <div className="font-pretendard text-3xl font-semibold">
                        Music
                    </div>

                    <div className="w-full ">
                                <ul>
                                    {tracks.map((track) => (

                                        <div  className="w-full rounded-2xl flex justify-center mb-8 " style={{
                                            height: '600px',
                                            backgroundColor:  `${mainColors[track.id]}80` || 'transparent'
                                        }}>
                                            <li key={track.id}>

                                                <img src={track.album.images[0]?.url} alt={track.name} className="w-80 h-80 shadow-2xl rounded-2xl mt-10"
                                                     onLoad={() => getMainColor(track.album.images[0]?.url, track.id)}/>
                                                <p className="font-pretendard text-2xl text-center mt-5 font-semibold">{track.name}</p>
                                                <p className="font-pretendard text-base text-center mt-1"> {track.artists.map(artist => artist.name).join(', ')}</p>
                                        <audio controls className="w-80 mt-3">
                                        <source src={track.preview_url} type="audio/mpeg"/>
                                </audio>
                                                <div className="font-pretendard text-center mt-10">
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

                </>
            )}
        </div>
    )
}

export default PlayList;
