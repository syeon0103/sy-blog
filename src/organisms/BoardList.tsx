
const BoardList = () => {
/*
    const imgList = [img1, img2, img3, img4, img5];
    const [posts , setPosts] = useState<any[]>([])

    useEffect(() => {

        const fetchPosts = async () => {
            try {
                const querySnapshot = await getDocs(query(collection(db, 'posts'), orderBy("timestamp", "desc")));
                const postsData = querySnapshot.docs.map(doc => ({
                    id : doc.id,
                    ...doc.data()
                }));
                console.log(postsData);
                setPosts(postsData);
            } catch (error) {
                console.log("에러남:::" , error);
            }
        }

        fetchPosts();
    }, []);


    return (
        <>
            <div className="w-full border-t-2 border-black">
                <div id="titleArea" className="h-20 mt-10 ml-20">
                    <motion.div animate={{y: -20}}
                                transition={{ease: "easeOut", duration: 2}}>
                        <svg width="400" height="140" viewBox="0 0 600 140">
                            <text
                                x="100" y="90" fill="#B3CCB0"
                                font-size="100" font-family="'Leckerli One', cursive"
                                rotate="4, 8, -8, -4, -20, -24, 48">
                                Log
                            </text>
                        </svg>
                    </motion.div>
                </div>

                <div className="mt-10 mr-10 items-end justify-end flex ">
                    <motion.button
                        initial={{opacity: 0.6}}
                        whileHover={{
                            transition: {duration: 1},
                        }}
                        whileTap={{scale: 0.8}}
                        transition={{ type: 'spring', stiffness: 300 }}
                        whileInView={{opacity: 1}}
                    >
                        <Link to={'/boardWrite'}>
                        <button  className="w-20 h-12 border-2 border-primary rounded-md shadow-md">
                            <p className="font-semibold text-base hover:text-primary"
                               style={{fontFamily: 'CoreDream'}}>글쓰기</p>
                        </button>
                        </Link>
                    </motion.button>

                </div>

                <div id="bordList" className=" flex flex-wrap mt-40 ml-32">
                    {posts.map((post, index) => (

                        <motion.div
                            whileHover={{ scale: 1.1}}
                            transition={{ type: 'ease', stiffness: 300 }}
                            className="relative w-72 h-72 mr-20 mb-20 border-4 border-primary rounded-lg shadow-lg overflow-hidden"
                        >
                            <Link to={`/boardDetail/${post.id}`} key={post.id}>

                            <img src={imgList[index % imgList.length]} alt="boardImg"
                                 className=" w-full h-full object-cover "/>

                            <div
                                className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-center opacity-0 hover:opacity-100 ">
                                <div className="text-white p-4 rounded-lg" style={{fontFamily: 'DungGeunMo'}}>
                                    <h3 className=" text-xl font-bold mb-2">{post.title}</h3>
                                    <p>{post.subTitle}</p>
                                </div>
                            </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>


            </div>

        </>
    )*/

}


export default BoardList;
