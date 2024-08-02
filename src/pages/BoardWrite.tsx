import Header from "../organisms/Header/Header.tsx";
import Editor from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import {useEffect, useRef, useState} from "react";
import {editorCss} from "./BoardWrite.style.tsx";
import { motion} from "framer-motion";

const BoardWrite = () => {

    const [editorHtml , setEditorHtml] = useState<string>('');
    const editorRef = useRef<Editor>(null);
    const [value, setValue] = useState("<div>何度でも絶対君と出会う</div>");

    const handleChange = (value : string )=> {
        setEditorHtml(value);
    }

    const checkEditorContent = () => {

        const editor = editorRef.current.getEditor();
        const container = editor.root;

        container.setAttribute('data-placeholder', '何度でも絶対君と出会う🧡');

    }

    useEffect(() => {

        checkEditorContent();

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
            <div className="w-full flex flex-col items-center justify-center border-2 border-black">

                <div className="">
                    <div className="mt-10 items-end justify-end flex ">
                        <motion.button
                            initial={{opacity: 0.6}}
                            whileHover={{
                                transition: {duration: 1},
                            }}
                            whileTap={{scale: 0.8}}
                            transition={{ type: 'spring', stiffness: 300 }}
                            whileInView={{opacity: 1}}
                        >
                            <button className="w-20 h-12 border-2 border-primary rounded-md shadow-md">
                                <p className="font-semibold text-base hover:text-primary"
                                   style={{fontFamily: 'DungGeunMo'}}>저장</p>
                            </button>
                        </motion.button>


                    </div>


                    <div className="mt-20">
                        <input
                            type="text"
                            placeholder="제목을 입력하세요"
                            className="w-full p-2 text-2xl font-bold bg-transparent border-none outline-none"
                            style={{fontFamily: 'DungGeunMo'}}
                        />
                    </div>

                    <div className="mb-4 mt-2">
                        <input
                            type="text"
                            placeholder="소제목을 입력하세요."
                            className="w-full p-2 text-lg font-normal text-gray-400 bg-transparent border-none outline-none"
                            style={{fontFamily: 'HS-Regular'}}
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

                {/*<div className="mt-4">
                      <h2>에디터 내용</h2>
                      <div dangerouslySetInnerHTML={{ __html: editorHtml }} />
                    </div>*/}
            </div>
        </>
    )
}
export default BoardWrite;
