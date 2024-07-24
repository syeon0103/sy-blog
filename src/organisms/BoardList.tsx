

import test from '../assets/img/'

const BoardList = () => {

    const imgList = Array.from({length: 5}, (_, index) => `../assets/img/${index}.jpg`);

    return (
        <>
            <div className="w-full h-[1500px] border-4 border-primary">

                <div className="mt-20 ml-20">

                    <div className="w-60 h-60 mr-10 border-4 border-pink-200 rounded-lg shadow-lg">

                    </div>
                </div>
            </div>

        </>
    )

}


export default BoardList;
