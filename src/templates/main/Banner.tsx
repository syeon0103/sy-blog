import { bannerCss } from './banner.style.tsx';

const Banner = () => {
    const text = '뉴스   2024.07.21   사이트 리뉴얼 중입니다.';
    const repeatCount = 10; // 추후 수정
    const generateRepeatedText = () => {
        const items = [];
        for (let i = 0; i < repeatCount; i++) {
            items.push(
                <div key={i} style={{ display: 'inline-block', marginLeft: '500px' }}>
                    <div className="animate-marquee">
                        {text}
                    </div>
                </div>
            );
        }
        return items;
    };



    return (
        <div css={bannerCss}>
            <div className="mt-0.5 w-full h-8 border-t-4 border-t-black border-b-4 border-b-black overflow-hidden">
                <div className="mt-1 animate-marquee">{generateRepeatedText()}</div>
            </div>
        </div>
    );
};

export default Banner;
