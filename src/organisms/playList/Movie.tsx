import movieIcon from "../../assets/icon/movie.svg";
import  {useEffect, useState} from "react";
import axios from "axios";
import Vibrant from "node-vibrant";

interface Movie {
    id: string;
}

const Movie = () => {

    const apiKey = '0171a2e41d0e9e3154abe8f71e08c565'
   // const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIw'
    const BASE_URL = 'https://api.themoviedb.org/3';


    const searchMovies = async (query: string) => {
        const response = await axios.get(`${BASE_URL}/search/movie?api_key=${apiKey}&language=ko-KR&query=${encodeURIComponent(query)}`);
        return response.data.results.length > 0 ? response.data.results: null;
    };

    const searchTVShows = async (query: string) => {
        const response = await axios.get(`${BASE_URL}/search/tv?api_key=${apiKey}&language=ko-KR&query=${encodeURIComponent(query)}`);

        return response.data.results.length > 0 ? response.data.results : null;
    };


    const [movieData, setMovieData] =  useState<any[]>([]);

   // const [progList, setProgList] =useState<any[]>([]);

    //const [loading, setLoading] = useState(false);


    useEffect(() => {

        handleSearch();


    }, []);

    const [tvData, setTvData] =  useState<any[]>([]);
    const handleSearch = async () => {

       // setLoading(true);
        try {
            const movieName = await searchMovies("시간을 달리는 소녀");
            const tvName =  await searchTVShows("눈이 부시게");

            if(movieName) {
              setMovieData(movieName)
            }

            if(tvName) {
                setTvData(tvName)
            }


        } catch (error) {
            console.error("Error searching books:", error);
        } finally {
          //  setLoading(false);
        }
    };


    useEffect(() => {
    }, [movieData]);

    useEffect(() => {
    }, [tvData]);



    const getMainColor = (imageUrl: string, trackId: string) => {
        const img = new Image();
        img.crossOrigin = 'Anonymous'; // CORS 설정

        //img.src = 'https://cors-anywhere.herokuapp.com/' + imageUrl;
        //img.src = proxyUrl + encodeURIComponent(imageUrl);

        //프록시 차이
        //  const proxyUrl = 'https://api.allorigins.win/get?url=';
        const proxyUrl = 'https://corsproxy.io/?';

       // const imageUrlTest = 'https://shopping-phinf.pstatic.net/main_4320796/43207962625.20231014070956.jpg';
        const imgTest = proxyUrl + encodeURIComponent(imageUrl);
        //  console.log("imgTest:::" , imgTest)

        img.src = imgTest;

        img.onload = () => {

            Vibrant.from(imgTest).getPalette().then((palette) => {
                const vibrantColor = palette.Vibrant?.hex;
                //   console.log('Vibrant color:', vibrantColor);

                setMainColors((prevColors) => ({
                    ...prevColors,
                    [trackId]: vibrantColor || 'transparent', // 기본값 설정
                }));
            }).catch(err => {
                console.error('Error extracting colors:', err);
            });


        };
    };

    const [mainColors, setMainColors] = useState<{ [key: string]: string }>({})

    const getImgPath = (path : string) => {
        return `https://image.tmdb.org/t/p/w500/${path}`;
    };


    return (
        <div className="flex justify-center flex-col items-center">

            <div className="font-pretendard text-3xl font-semibold mb-8 flex">
                <img src={movieIcon as string} alt="bookIcon" className="mr-2"/>
                <span>Movie</span>
            </div>

            <div className="w-full flex flex-row">

                <div className="flex sm:flex-col  md:flex-col ">

                    <div className="flex-1 px-4">


                        {movieData.length > 0 && (
                            <div className="w-[400px] rounded-2xl flex justify-center mb-8" key={movieData[0].id} style={{
                                height: '400px',
                                backgroundColor: `${mainColors[movieData[0].id]}80` || 'transparent'
                            }}>

                                <li key={movieData[0].id }
                                    className="text-center mb-4 flex flex-col items-center">

                                    <div className="w-40 h-40 ">
                                        <img src={getImgPath(movieData[0].poster_path )} alt="tv"
                                             className=" shadow-2xl rounded-2xl mt-10 object-cover"
                                             onLoad={() => getMainColor(getImgPath(movieData[0].poster_path ), movieData[0].id)}/>
                                    </div>

                                    <p className="font-pretendard text-2xl text-center mt-36 font-semibold">{movieData[0].title }</p>


                                </li>


                            </div>


                        )}


                    </div>


                    <div className="flex-1 px-4">

                        {tvData.map((prog) => (

                            <div className="w-[400px] rounded-2xl flex justify-center mb-8 " key={prog} style={{
                                height: '400px',
                                backgroundColor: `${mainColors[prog.id]}80` || 'transparent'
                            }}>

                                <li key={prog.id}
                                    className="text-center mb-4 flex flex-col items-center">

                                    <div className="w-40 h-40 ">
                                        <img src={getImgPath(prog.poster_path)} alt="tv"
                                             className=" shadow-2xl rounded-2xl mt-10 object-cover"
                                             onLoad={() => getMainColor(getImgPath(prog.poster_path), prog.id)}/>
                                    </div>

                                    <p className="font-pretendard text-2xl text-center mt-36 font-semibold">{prog.name}</p>


                                </li>

                            </div>

                        ))}

                    </div>
                </div>


            </div>


        </div>
    )
}

export default Movie;
