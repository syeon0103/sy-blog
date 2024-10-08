/*import Header from "../organisms/Header/Header.tsx";
import Editor from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import {useEffect, useRef, useState} from "react";
import {editorCss} from "./BoardWrite.style.tsx";
import { motion} from "framer-motion";
import {db} from '../firebase'
import { doc, getDocs, addDoc, setDoc , collection } from 'firebase/firestore';
import {Link, useNavigate} from 'react-router-dom';
import Logo from "../assets/logo2.svg";*/

const BoardWrite = () => {



    return(
        <>
        </>
    )

   /* const navigate = useNavigate(); // 훅 사용을 위해 여기서 초기화 사용자가 직접 클릭할 게 아니라면 그냥 네비게이트 사용

    const [editorHtml , setEditorHtml] = useState<string>('');
    const editorRef = useRef<Editor>(null);

    const [title, setTitle] = useState<string>('')
    const [subTitle, setSubTitle] = useState<string>('')
    const [editorContent, setEditorContent] = useState<string>('')

    const save = async () => {

        try {
            const docRef = await addDoc(collection(db, 'posts'), {
                title,
                subTitle,
                content : editorHtml,
                timestamp : new Date(),
            });

            console.log("성공", docRef.id)

            setTitle('')
            setSubTitle('')
            setEditorHtml('')

            navigate('/life')

        } catch (error) {
            console.log("error", error)
        } finally {

        }

    }

    const handleChange = (value : string )=> {
        setEditorHtml(value);
    }

    const setPlaceHolder = () => {

        const editor = editorRef.current.getEditor();
        const container = editor.root;

        container.setAttribute('data-placeholder', '何度でも絶対君と出会う🧡');

    }

    useEffect(() => {
        console.log(db)
        setPlaceHolder();
    }, [editorHtml]);

    const modules = {
        toolbar: {
            container: [
                [{ 'font': ['sans-serif', 'serif', 'monospace', 'DungGeunMo'] }],
                [{ 'size': ['small', false, 'large', 'huge'] }],
                ["image"],
                [{ header: [1, 2, 3, 4, 5, false] }],
                ["bold", "underline"],
            ],
        },
    }

    return (
        <>
            <Header/>
            <div className="w-full flex flex-col items-center justify-center border-t-2 border-black ">

                <div className="">
                    <div className="mt-10 items-end justify-end flex ">
                        <motion.button
                            initial={{opacity: 0.6}}
                            whileHover={{
                                transition: {duration: 1},
                            }}
                            whileTap={{scale: 0.8}}
                            transition={{type: 'spring', stiffness: 300}}
                            whileInView={{opacity: 1}}
                        >
                            <button onClick={save} className="w-20 h-12 border-2 border-primary rounded-md shadow-md">
                                <p className="font-semibold text-base hover:text-primary"
                                   style={{fontFamily: 'nanumgothic'}}>저장</p>
                            </button>
                        </motion.button>


                    </div>


                    <div className="mt-20">
                        <input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            type="text"
                            placeholder="제목을 입력하세요"
                            className="w-full p-2 text-2xl font-bold bg-transparent border-none outline-none"
                            style={{fontFamily: 'DungGeunMo'}}
                        />
                    </div>

                    <div className="mb-4 mt-2">
                        <input
                            value={subTitle}
                            onChange={(e) => setSubTitle(e.target.value)}
                            type="text"
                            placeholder="소제목을 입력하세요."
                            className="w-full p-2 text-lg font-normal text-gray-400 bg-transparent border-none outline-none"
                            style={{fontFamily: 'nanumgothic'}}
                        />
                    </div>


                    <div className="border-[1px] border-primary opacity-50 w-full mb-10"/>

                    <div css={editorCss} className="relative">
                        <Editor
                            ref={editorRef}
                            modules={modules}
                            value={editorHtml}
                            onChange={handleChange}
                            theme="snow"
                            className="h-[1000px] overflow-hidden"
                        />
                    </div>
                </div>

                {/!*<div className="mt-4">
                      <h2>에디터 내용</h2>
                      <div dangerouslySetInnerHTML={{ __html: editorHtml }} />
                    </div>*!/}


            </div>


            <div className="mt-10 border-[1.5px] border-primary opacity-50 w-full mb-10"/>

            <div className="flex items-center justify-center ">

                <motion.div
                    whileHover={{scale: 1.1}} // 마우스 오버 시 애니메이션
                    transition={{type: 'spring', stiffness: 300}}
                    className="mb-10 w-72 h-20  flex items-center justify-center"
                >
                    <Link to={`/Life`} className="flex items-center">
                        <img src={Logo} alt="logo" className="w-30 h-24"/>
                        <div className="" style={{fontFamily: 'DungGeunMo'}}>Back to memories</div>
                    </Link>

                </motion.div>
            </div>

        </>
    )*/
}
export default BoardWrite;
