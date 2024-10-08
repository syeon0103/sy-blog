/*import Rating from "../atoms/Rating";
import {useEffect, useState} from "react";
import img1 from "../assets/movie/movie_1.jpg";
import img2 from "../assets/movie/movie_2.jpg";
import img3 from "../assets/movie/movie_3.jpg";
import img4 from "../assets/movie/movie_4.jpg";
import bg4 from "../assets/movie/bg/bg_4.jpg"
import bg2 from "../assets/movie/bg/bg_2.jpg"
import { motion } from "framer-motion";
import {Link} from "react-router-dom";*/

const ReviewList = () => {


    return(
        <>
        </>
    )


   /* const [rating, setRating] = useState<number>(0);
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
    }, []);


    const reviewList = [
        {
            id : 1,
            section: "드라마",
            title: "눈이 부시게",
            summary: "3화부터 계속 움...",
            img: img1,
            star : 5,
            tag : ["슬픔" , "감동", "치매"],
            bgImg : bg4
        },
        {
            id : 2,
            section: "영화",
            title: "인사이드 아웃2",
            summary: "1은 별로였는데 2는 두 번이나 볼 정도로 좋음. 불안이란 캐릭터를 사춘기에 맞게 잘 설정함",
            img: img2,
            star : 5,
            tag : ["사춘기" , "감정", "귀여움"],
            bgImg : bg2
        },
        {
            id : 3,
            section: "영화",
            title: "암살",
            summary: "광복절 기념으로 봄",
            img: img3,
            star : 4,
            tag : ["독립군" , "광복", "친일파죽어"],
            bgImg: ''
        },
        {
            id : 4,
            section: "애니메이션",
            title: "괴수 8호",
            summary: "시즌2 존나 빨리 나와야 됨 개재밌음",
            img: img4,
            star : 4,
            tag : ["호시나" , "부대장님", "사랑해"],
            bgImg: ''
        }
    ];

    return (
        <div className="w-full border-t-2 border-black">
            <motion.div
                initial={{y: 50, opacity: 0}} // 초기 상태: 화면 아래에서 위로 이동 및 투명
                animate={{y: show ? 0 : 50, opacity: show ? 1 : 0}} // 애니메이션 상태: 위로 이동 및 보임
                transition={{duration: 1, ease: "easeOut"}} // 애니메이션 지속 시간과 easing
                exit={{y: 50, opacity: 0}} // exit 애니메이션: 다시 아래로 이동 및 투명
            >
                <div id="reviewList"
                     className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-4 mt-40 ml-32 mr-32">
                    {reviewList.map((key, index) => (
                        <motion.div
                            key={index}
                            whileHover={{scale: 1.1}}
                            transition={{type: 'ease', stiffness: 300}}
                            className="flex flex-col lg:h-64 lg:flex-row shadow-md bg-white border-charry border-opacity-35 border-2 rounded-lg overflow-hidden"
                        >
                            <Link to={`/reviewDetail/${key.id}`} state={{ review: key }} key={key.title} className="w-full lg:w-48 h-48 lg:h-auto">
                                <div
                                    className="w-full h-full bg-cover bg-center"
                                    style={{backgroundImage: `url(${key.img})`}}
                                    title={`Image ${index + 1}`}
                                />
                            </Link>

                            <div className="flex-1 p-4 flex flex-col">
                                <div className="mb-4 flex-1 flex-row items-center justify-between">
                                    <div className="justify-between flex items-center">
                                        <p className="text-sm text-gray-600"
                                           style={{fontFamily: 'nanumgothic'}}>{key.section}</p>
                                        <Rating rating={key.star} onRatingChange={setRating}/>
                                    </div>
                                    <div className="text-gray-900 font-bold text-xl mt-2 mb-2"
                                         style={{fontFamily: 'CoreDream'}}>{key.title}</div>
                                    <p className="text-gray-700 text-base"
                                       style={{fontFamily: 'nanumgothic'}}>{key.summary}</p>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {key.tag.map((item, index) => (
                                        <span key={index}
                                              className="inline-block shadow-md bg-charry rounded-full px-3 py-1 text-sm font-normal text-white"
                                              style={{fontFamily: 'CoreDream'}}>#{item}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
);*/
}

export default ReviewList;
