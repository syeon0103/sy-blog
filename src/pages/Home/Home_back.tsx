

const Home_back = () => {

    /*const cardsData = new Array(8).fill({
        title: "대온실 수리 보고서",
        description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
        imageUrl: img1,
    });

    const Card = ({ title, description, imageUrl }) => (
        <div className="max-w-sm bg-white border border-gray-200 sm:w-80 md:w-72  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 font-pretendard">
            <a href="#">
                <img className="rounded-t-lg w-full object-cover sm:h-64 md:h-52 h-96" src={imageUrl} alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
                <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#CBEBCE] rounded-lg hover:bg-[#CDF0EA] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Read more
                    <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                    </svg>
                </a>
            </div>
        </div>
    );

    return (
        <div className="bg-gradient-to-br from-[#CBEBCE] to-[#CDF0EA] w-full min-h-screen flex flex-col items-center gap-5 p-3">
            <div className="mt-10 flex flex-row items-center justify-center">
                <div className="text-gray-700 font-semibold font-seoyun sm:text-2xl md:text-2xl text-4xl ">
                    <p> My lucky</p>
                </div>
                <Lottie animationData={flower} loop={true} autoplay={true} className="w-36 sm:w-28"/>
                <div className="text-gray-700 font-semibold font-seoyun sm:text-2xl md:text-2xl text-4xl ">
                    <p > Book List </p>
                </div>
            </div>


            <div className="flex flex-row justify-center items-center mb-20">
                <div className="grid grid-cols-3 gap-10 sm:grid-cols-1 md:grid-cols-2">
                    {cardsData.map((_, index) => (
                        <motion.div
                            key={index}
                            whileHover={{scale: 1.08}}
                            transition={{type: 'ease', stiffness: 300}}
                            className="shadow-md rounded-lg "
                        >
                            <Card key={index} title={cardsData[index].title} description={cardsData[index].description}
                                  imageUrl={cardsData[index].imageUrl}/>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/!* <Header/>
            <Banner/>
            <Works/>
            <Log/>
            <Life/>*!/}
            <div className="text-white font-pretendard mb-8 text-sm">
                Copyright © 2024 My lucky book list
            </div>
        </div>
    )*/
}


export default Home_back;
