
import axios  from "axios";
import  {useEffect, useState} from "react";
import Vibrant from "node-vibrant";
import bookIcon from '../../assets/icon/book.svg';

interface bookList {
    list: string[][];
}

const Book = ({list} : bookList) => {


    const flatBookList = list.flat();

    function getRandomBook(bookList : string[]) {
        if (flatBookList.length === 0) return null;
        const randomIndex = Math.floor(Math.random() * bookList.length);
        return bookList[randomIndex];
    }

    const randomBook : null | string = getRandomBook(flatBookList);

    // apiKey = '979ee0336ac09636798513b997594252';
    const apiKey = 'Ek6N4Gf6XvrIXJVQ707K';
    const client_key = 'qKreHTA7SE'
    const [bookData , setBookData] = useState<any[]>([]);
    const [isBookState, setIsBookState] = useState(false)

    const [mainColors, setMainColors] = useState<{ [key: string]: string }>({})


    const getMainColor = (imageUrl: string, trackId: string) => {
        const img = new Image();
        img.crossOrigin = 'Anonymous'; // CORS 설정

        //img.src = 'https://cors-anywhere.herokuapp.com/' + imageUrl;
        //img.src = proxyUrl + encodeURIComponent(imageUrl);

        //프록시 차이
       //  const proxyUrl = 'https://api.allorigins.win/get?url=';
        const proxyUrl = 'https://corsproxy.io/?';

      //  const imageUrlTest = 'https://shopping-phinf.pstatic.net/main_4320796/43207962625.20231014070956.jpg';
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

    useEffect(() => {

        if(!isBookState) {

                handleSearch();

        }


    }, [randomBook]);





    const getBooks = async (query: string | null) => {

        const config:  {
            headers: { "X-Naver-Client-Id": string; "X-Naver-Client-Secret": string };
            params: { query: string; display: number }
        } = {
            headers: {
                'X-Naver-Client-Id': apiKey,
                'X-Naver-Client-Secret': client_key,
            },
            params: { query: query as string, display: 1 },
        };

        const resp = await axios.get(`/api/v1/search/book.json`, config);
        return resp.data;

       /* try {
            const resp = await axios.get(`/api/v1/search/book.json` , {
                headers : {
                    'X-Naver-Client-Id' : apiKey,
                    'X-Naver-Client-Secret': client_key,
                },
                params: { query , display: 1},
            })


           /!* const resp = await axios.get(`https://dapi.kakao.com/v3/search/book` , {
                headers : {
                    Authorization : `KakaoAK ${apiKey}`,
                },
                params : {
                    query : query ,
                    size : 1
                }
            })*!/
            return resp.data;

        } catch (error) {
            console.log("error:::" , error);

        }*/


    }

    //const [query, setQuery] = useState<string>('');
    const [loading, setLoading] = useState(false);

    const handleSearch = async () => {
        setLoading(true);

        try {
            const data = await getBooks(randomBook);
            console.log("data.documents:::", data);

            if (data && Array.isArray(data.items)) {
                setBookData(data.items);
                setIsBookState(true);
            } else {
                console.error("Unexpected data structure:", data);
            }

        } catch (error) {
            console.error("Error searching books:", error);
        } finally {
            setLoading(false); // 이 줄은 주석을 해제하여 로딩 상태를 종료하세요.
        }
    };


    return (

            <div className="flex justify-center flex-col items-center">

                    <div className="font-pretendard text-3xl font-semibold mb-8 flex">
                        <img src={bookIcon as string} alt="bookIcon" className="mr-2"/>
                            <span>Book</span>
                    </div>

                    <div className="w-full ">

                        {loading ? (
                            <p>Loading...</p>
                        ) : (

                            <div>
                              {bookData.map((book) => (

                                    <div className="w-[400px] rounded-2xl flex justify-center mb-8 " key={book} style={{
                                        height: '400px',
                                        backgroundColor: `${mainColors[book.isbn]}80` || 'transparent'
                                    }}>

                                        <li key={book.isbn}
                                            className="text-center mb-4 flex flex-col items-center">

                                            <div className="w-40 h-40 ">
                                                <a href={book.link} target="_blank" rel="noopener noreferrer">
                                                    <img src={book.image} alt="book2"
                                                         className=" shadow-2xl rounded-2xl mt-10 object-cover"
                                                         onLoad={() => getMainColor(book.image, book.isbn)}/></a>
                                            </div>

                                            <p className="font-pretendard text-2xl text-center mt-32 font-semibold">{book.title}</p>
                                            <p className="font-pretendard text-lg text-center mt-3">{book.author}</p>

                                        </li>

                                    </div>

                                ))}

                            </div>

                        )}
                  </div>
             </div>

             )

     }

export default Book;
