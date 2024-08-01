import Header from "../organisms/Header/Header.tsx";
import Editor from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import {useState} from "react";
import {editorCss} from "./BoardWrite.style.tsx";
import font from '../styles/font.css'


const BoardWrite = () => {

    const [editorHtml , setEditorHtml] = useState<String>('');

    const handleChange = (value : string )=> {
        setEditorHtml(value);
    }

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
            <div className="w-full h-screen flex items-center justify-center border-2 border-black">
                <div css={editorCss}>
                    <Editor
                        modules={modules}
                        value={editorHtml}
                        onChange={handleChange}
                        theme="snow"
                        className="h-[1000px]"
                    />
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
