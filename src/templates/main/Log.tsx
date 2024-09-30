import {titleCss} from "./Log.style.tsx";

const Log = () => {

    /*
        1. 스크롤 아래로 내릴 시 work가 밀리면서 아래 내용이 부드럽게 올라오도록
        2.
     */


    return (
        <div className="mt-10 w-full h-[1000px] border-4 border-primary">
            <div css={titleCss}>
                <text className="title">LOG</text>
            </div>
        </div>
    )


}

export default Log;
