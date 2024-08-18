import {Link, useParams} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import { doc, getDoc, DocumentData , deleteDoc } from "firebase/firestore";
import { db } from "../firebase";
import firebase from "firebase/compat";
import Header from "../organisms/Header/Header";
import {detailCss, contentCss} from "./BoardDetail.style";
import { useNavigate} from 'react-router-dom';
import Logo from '../assets/logo2.svg';
import { motion} from "framer-motion";
import Footer from "../organisms/Footer/Footer.tsx";

const BoardDetail = () => {

    const navigate = useNavigate();
    const { id } = useParams<{id : string}>();
    const [postData, setPostData] = useState<DocumentData | null>(null);

    useEffect(() => {

        const getPostData = async () => {

            if(id) {
                try {
                    const docRef = doc(db, 'posts', id);
                    const docSnap = await getDoc(docRef);

                    if(docSnap.exists()) {
                        console.log(docSnap.data())
                        setPostData(docSnap.data());
                    } else {
                        console.log("데이터 업슴")
                    }

                } catch (error) {
                    console.log("error::" , error)
                }
            }

        }

        getPostData();

    }, [id]); //id 값이 변경될 때마다 실행 됨

    const deletePost = async () => {

        if(!confirm("삭제하시겠습니까?")) return;

        if(id) {

            try {
                const delRef = await deleteDoc(doc(db, "posts", id))
                console.log("post delete")

                navigate('/life')

            } catch (error) {
                console.log("delete error" , error)
            }
        }

    }

    if(!postData) return <div>Loading......</div>

    return (
        <>
        <Header/>
    <div css={detailCss}>
            <div className="w-full flex flex-col items-center justify-center border-t-2 border-black ">

                <div className="mt-20 flex flex-col items-center">
                    <div className="font-bold text-2xl"
                         style={{fontFamily: 'nanumgothic'}}>
                        {postData.title}
                    </div>

                    <div className="mt-3 mb-3 text-gray-300 font-bold text-xl"
                         style={{fontFamily: 'nanumgothic'}}>
                        {postData.subTitle}
                    </div>

                </div>

                <button className="w-20 mb-3 mr-10 h-12 border-2 border-primary rounded-md shadow-md ml-auto" onClick={deletePost}>
                    <p className="font-semibold text-base hover:text-primary" style={{ fontFamily: 'CoreDream' }}>삭제</p>
                </button>


                <div className="border-[1.5px] border-primary opacity-50 w-full mb-10"/>

                <div css={contentCss}>
                    <div  className="content" dangerouslySetInnerHTML={{ __html: postData.content }} />

                </div>
            </div>


              <Footer/>

        </div>
        </>
    )
}

export default BoardDetail;
