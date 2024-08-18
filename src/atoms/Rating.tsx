import { css } from '@emotion/react';
import { useState } from 'react';

export const ratingCss = css`
    display: flex;
    cursor: pointer;

    .star {
        font-size: 1.2rem;
        color: lightgray;
        transition: color 0.2s;
        position: relative;
        width: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .star.filled {
        color: #FE6B8B;
    }

    .star.half {
        color: #FE6B8B;
    }

    .star.half::before {
        content: '★';
        position: absolute;
        top: 0;
        left: 0;
        color: #FE6B8B;
        width: 50%;
        overflow: hidden;
    }
`;

interface RatingProps {
    rating: number;
    onRatingChange: (rating: number) => void;
}

const Rating = ({ rating, onRatingChange }: RatingProps) => {
    const stars = [1, 2, 3, 4, 5];
    const [hoverRating, setHoverRating] = useState<number | null>(null);

    const starClick = (value: number) => {
        onRatingChange(value);
    };

    const startMouseEnter = (value: number) => {
        setHoverRating(value);
    };

    const startMouseLeave = () => {
        setHoverRating(null);
    };

    const renderStar = (value: number) => {
        const currentRating = hoverRating ?? rating;
        const isFilled = value <= currentRating;
        const isHalf = value - 0.5 < currentRating && value >= currentRating;

        return (
            <span
                key={value}
                onClick={() => starClick(value)}
                onMouseEnter={() => startMouseEnter(value)}
                onMouseLeave={startMouseLeave}
                className={`star ${isFilled ? 'filled' : ''} ${isHalf ? 'half' : ''}`}
            >
                ★
            </span>
        );
    };

    return (
        <div css={ratingCss}>
            {stars.map(value => renderStar(value))}
        </div>
    );
};

export default Rating;
