import {query} from "firebase/firestore";
import axios from "axios";
import React, {useState} from "react";
import bookImg2 from '../../assets/book/book_2.jpg'
import Vibrant from "node-vibrant";


const Book = () => {

    const apiKey = '979ee0336ac09636798513b997594252';
    const [bookData , setBookData] = useState<any[]>([]);

    const [mainColors, setMainColors] = useState<{ [key: string]: string }>({})


    const getMainColor = (imageUrl: string, trackId: string) => {
        const img = new Image();
        img.crossOrigin = 'Anonymous'; // CORS 설정
        img.src = imageUrl;

        img.onload = () => {


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

    const getBooks = async (query : string ) => {

        try {
            const resp = await axios.get(`https://dapi.kakao.com/v3/search/book` , {
                headers : {
                    Authorization : `KakaoAK ${apiKey}`,
                },
                params : {
                    query : query ,
                    size : 1
                }
            })
            console.log("resp.data:::" , resp.data)
            return resp.data;

        } catch (error) {
            console.log("error:::" , error);

        }


    }

    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSearch = async () => {
        setLoading(true);
        try {
            const data = await getBooks(query);
            console.log("data.documents:::" , data.documents)
            setBookData(data.documents);
        } catch (error) {
            console.error("Error searching books:", error);
        } finally {
            setLoading(false);
        }
    };



    return (

            <div className="flex justify-center flex-col items-center">

            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="책 제목으로 검색"
            />
            <button onClick={handleSearch} disabled={loading}>
                {loading ? '로딩중...' : '검색'}
            </button>

                    <div className="mt-8 font-pretendard text-3xl font-semibold mb-8">
                        Book
                    </div>

                    <div className="w-full ">
                                {bookData.map((book) => (


                                    <div className="w-full rounded-2xl flex justify-center mb-8 " style={{
                                        height: '600px',
                                        backgroundColor: `${mainColors[book.isbn]}80` || 'transparent'
                                    }}>

                                        <li key={book.isbn}
                                            className="text-center mb-4 flex flex-col items-center">

                                            <img src={bookImg2} alt="book2"
                                                 className="w-60 h-80 shadow-2xl rounded-2xl mt-10"
                                                 onLoad={() => getMainColor(bookImg2, book.isbn)}/>
                                            <p className="font-pretendard text-2xl text-center mt-5 font-semibold">{book.title}</p>
                                            <p className="font-pretendard text-base text-center mt-1">{book.authors}</p>
                                            <p className="font-pretendard text-base font-light mt-1  mx-auto w-1/3">{book.contents}</p>
                                            <p className="font-pretendard text-base font-light mt-4">
                                                <a href={book.url} target="_blank" rel="noopener noreferrer">자세히 보기</a></p>

                                        </li>

                                    </div>

                                ))}
                  </div>
             </div>

             )

     }

export default Book;