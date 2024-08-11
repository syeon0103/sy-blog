import { css } from '@emotion/react';
import {useEffect, useRef, useState} from "react";

export const ratingCss = css`
    display: flex;
    cursor: pointer;
    
    .star {
      font-size: 2rem;
      color: lightgray;
      transition: color 0.2s;
      position: relative;
      width: 30px;
      height: 30px;
    }
    
    .star.filled {
      color: gold;
    }
    
    .star.half {
     color: gold;
    }
    
    .star.half::before {
      content: '★';
      position: absolute;
      top: 0;
      left: 0;
      color: gold;
      width: 50%;
      overflow: hidden;
    }
    
`;


interface RatingProps {
    rating: number;
    onRatingChange : (rating : number) => void;
}

const Rating = ({rating, onRatingChange} : RatingProps) => {
    const star = [1,2,3,4,5];
    const [hoverRating, setHoverRating] = useState<number | null>(null)
    const starRef = useRef(null);
    const [starWidth, setStarWidth] = useState(0);
    const starClick = (value : number) => {
        onRatingChange(value);
    }

    const startMouseEnter = (value :number) => {
        console.log("value" , value)


        setHoverRating(value);
    }

    const startMouseLeave = () => {
        setHoverRating(null);
    }

    //Nullish Coalescing Operator
    //변수가 null 또는 undefined 일 때 기본값 제공
    const renderStar = (value : number) => {

        console.log("ratingValue", value)

        const isFilled = value <= (hoverRating ?? rating/2);
        const isHalf = value - 0.5 <= (hoverRating ?? rating) && value + 1 > (hoverRating ?? rating);

        return (
            <span
                ref={starRef}
                key={value}
                onClick={() => starClick(value)}
                onMouseEnter={() => startMouseEnter(value)}
                onMouseLeave={startMouseLeave}
                className={`star ${isFilled ? 'filled' : ''} ${isHalf ? 'half' : ''}`}
            >
                ★
            </span>
        )

    }


    return (
        <>
            <div css={ratingCss}>
                {star.map(value => (
                    renderStar(value)
                ))}

            </div>

        </>
    )


}

export default Rating;
