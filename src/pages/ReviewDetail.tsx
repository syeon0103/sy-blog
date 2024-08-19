import Header from "../organisms/Header/Header.tsx";
import Footer from "../organisms/Footer/Footer.tsx";
import { useLocation } from "react-router-dom";
import { css } from "@emotion/react";
import Confetti from "../atoms/Confetti.tsx";
import Rating from "../atoms/Rating.tsx";
import { useState } from "react";

const wrapCss = css`
    margin: 0 auto;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    position: relative;
    padding-bottom: 4rem;
`;

const backgroundCss = (bgImg) => css`
    position: relative;
    width: 100%;
    flex: 1;
    background-image: url(${bgImg});
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    overflow: hidden;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.7) 100%);
        filter: blur(10px);
        pointer-events: none;
    }
`;

const diviCss = css`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
    width: 90%;
    max-width: 1200px;
`;

const containerCss = css`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: flex-start;
    width: 90%;
    max-width: 1200px;

    @media (max-width: 768px) {
        flex-direction: column; /* 화면이 좁아지면 세로 방향으로 변경 */
        align-items: center; /* 중앙 정렬 */
    }
`;

const posterCss = css`
    width: 16rem;
    height: 23rem;
`;

const textContainerCss = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: black;
    margin-left: 1rem; /* 여백 조정 */
    flex: 1;
`;

const titleCss = css`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
    font-family: 'CoreDream', serif;
`;

const sectionCss = css`
    margin-bottom: 1rem;
    font-size: 1.1rem;
    font-weight: normal;
    font-family: 'Pretendard-Regular', serif;
`;

const summaryCss = css`
    font-size: 1.1rem;
    font-weight: normal;
    font-family: 'Pretendard-Regular', serif;
`;

const starCss = css`
    margin-top: 40px;

    .star {
        width : 30px;
        font-size: 2.5rem;
    }
`;

const confettiCss = css`
    margin-top: 40px;
`;

const movieTextContainerCss = css`
    margin-bottom: -300px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
   
`;

const movieTextBoxCss = css`
    max-width: 4xl;
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const movieTextTitleCss = css`
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
`;

const movieTextContentCss = css`
    font-size: 1rem;
    color: gray;
`;

const ReviewDetail = () => {
    const [rating, setRating] = useState<number>(0);
    const data = useLocation();
    const { review } = data.state || {};

    if (!review) {
        return <div>데이터가 없습니다.</div>;
    }

    return (
        <>
            <Header />
            <div className="w-full border-t-2 border-black">
                <div css={wrapCss}>
                    <div css={backgroundCss(review.bgImg)} />
                    <div css={diviCss}>
                        <div css={containerCss}>
                            <div css={posterCss}>
                                <img className="rounded-md shadow-md w-full h-full object-cover" src={review.img} alt="img" />
                            </div>
                            <div css={textContainerCss}>
                                <div css={sectionCss}>
                                    {review.section}
                                </div>
                                <div css={titleCss}>
                                    {review.title}
                                </div>
                                <div css={summaryCss}>
                                    {review.summary}
                                </div>
                                <div css={starCss}>
                                    <Rating rating={review.star} onRatingChange={setRating} />
                                </div>
                                <div css={confettiCss}>
                                    <Confetti />
                                </div>
                            </div>
                        </div>

                    <div css={movieTextContainerCss}>
                        <div css={movieTextBoxCss}>
                            <div className="px-6 py-4">
                                <div css={movieTextTitleCss}>Movie Text</div>
                                <p css={movieTextContentCss}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia,
                                    nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. Lorem ipsum
                                    dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
                                    perferendis eaque, exercitationem praesentium nihil. Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque,
                                    exercitationem praesentium nihil. Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
                                    nihil. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia,
                                    nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. Lorem ipsum
                                    dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
                                    perferendis eaque, exercitationem praesentium nihil.
                                </p>
                            </div>
                        </div>
                    </div>
            </div>


                </div>
            </div>
            <Footer />
        </>
    );
};

export default ReviewDetail;
