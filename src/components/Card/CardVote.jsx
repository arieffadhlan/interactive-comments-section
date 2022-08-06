import React, { useState } from 'react';
import { ReactComponent as IconPlus } from '../../assets/icons/icon-plus.svg';
import { ReactComponent as IconMinus } from '../../assets/icons/icon-minus.svg';

export default function CardVote({ comment }) {
    const [score, setScore] = useState(comment.score);

    const upVote = () => {
        if (score > comment.score) return;
        return setScore((prevScore) => prevScore + 1);
    };

    const downVote = () => {
        if (score < comment.score) return;
        return setScore((prevScore) => prevScore - 1);
    };

    return (
        <div className='h-max flex flex-col justify-center items-center gap-2 p-3 rounded-xl bg-very-light-gray'>
            <button
                onClick={upVote}
                className='w-5 h-5 flex justify-center items-center border-0 bg-transparent'
            >
                <IconPlus />
            </button>
            <span className='font-medium text-moderate-blue'>{score}</span>
            <button
                onClick={downVote}
                className='w-5 h-5 flex justify-center items-center border-0 bg-transparent'
            >
                <IconMinus />
            </button>
        </div>
    );
}
