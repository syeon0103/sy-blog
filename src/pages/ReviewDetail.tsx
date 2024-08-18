import Header from "../organisms/Header/Header.tsx";
import Footer from "../organisms/Footer/Footer.tsx";
import { useLocation } from "react-router-dom";
import { css } from "@emotion/react";
import Confetti from "../atoms/Confetti.tsx";

const wrapCss = css`
    margin: 0 auto;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    position: relative;
    padding-bottom: 4rem; /* 푸터 공간 확보 */
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
    overflow: hidden; /* 내부 요소가 배경을 넘어가지 않도록 설정 */

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

const containerCss = css`
    position: absolute; /* 절대 위치로 배치 */
    bottom: -10%; /* 하단 여백 */
    left: 50%;
    transform: translateX(-50%); /* 중앙 정렬 */
    display: flex;
    flex-direction: row; /* 기본적으로 가로 방향 */
    gap: 1rem; /* 이미지와 텍스트 사이의 여백 */
    align-items: flex-start; /* 위쪽에 정렬 */
    width: 90%; /* 컨테이너 너비 조정 */
    max-width: 1200px; /* 최대 너비 설정 */

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
    font-family: 'nanumgothic', serif;
`;

const summaryCss = css`
    font-size: 1.1rem;
    font-weight: normal;
    font-family: 'nanumgothic', serif;
`;

const confettiCss = css`
    margin-top: 40px;
`;



const ReviewDetail = () => {
    const data = useLocation();
    const { review } = data.state || {};

    if (!review) {
        return <div>데이터가 없습니다.</div>;
    }

    return (
        <>
            <Header/>
            <div className="w-full border-t-2 border-black">
                <div css={wrapCss}>
                    <div css={backgroundCss(review.bgImg)}>

                    </div>
                    <div css={containerCss}>
                        <div css={posterCss}>
                            <img className="rounded-md shadow-md w-full h-full object-cover" src={review.img} alt="img"/>
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
                            <div css={confettiCss}>
                                <Confetti/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default ReviewDetail;
