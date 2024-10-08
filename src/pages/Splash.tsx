/*
import whale from '../assets/icon/whale.svg'
import spWhale from '../assets/icon/sparkingwhale.svg'
import {wrapCss, splashCss, mentCss} from "./Splash.style";
import {useEffect, useRef, useState} from "react";
*/

const Splash = () => {
   /* const text = "welcome to suyeon's blog"
    const [loadingText, setLoadingText] = useState('');
    let index = useRef(0);

    useEffect(() => {
        const setIntroText  = setInterval(() => {

            if (index.current < text.length) {
                setLoadingText(prevText => prevText + text.charAt(index.current));
                console.log(text.charAt(index.current))
                index.current++;
            }
        }, 200);
        return () => {

            clearInterval(setIntroText);
        };

    }, []);

  /!*  useEffect(() => {
        const typeWriter = () => {
            if(index.current < text.length) {
                setDisplayedText(prevText => prevText + text.charAt(index.current));

                index.current++;

            }
        };
        setTimeout(typeWriter, speed);
        typeWriter();


    }, []);*!/


    return (
    <div css={wrapCss}>
        <div css={splashCss}>
            <img src={whale} alt="whale"/>
            <img src={spWhale} alt="spWhale"/>
            <img src={whale} alt="whale"/>
            <img src={spWhale} alt="spWhale"/>
        </div>

        <div css={mentCss} style={{fontFamily: 'DungGeunMo'}}>
            <span id="text">{loadingText}</span>
            <span id="cursor"></span>
        </div>
    </div>
    )
*/
}

export default Splash;
