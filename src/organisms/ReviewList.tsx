import Rating from "../atoms/Rating";
import {useState} from "react";

const ReviewList = () => {

    const [rating, setRating] = useState<number>(0);

    return (
        <>
            <div className="w-full border-t-2 border-black">
            <Rating rating={rating} onRatingChange={setRating}/>

            </div>
        </>
    )

}

export default ReviewList;
