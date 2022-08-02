import React, { useState } from 'react';
import { ReactComponent as IconPlus } from '../../assets/icons/icon-plus.svg';
import { ReactComponent as IconMinus } from '../../assets/icons/icon-minus.svg';

export default function CardVote({ data }) {
    const [score, setScore] = useState(data.score);

    const upVote = () => {
        if (score > data.score) return;
        return setScore((prevScore) => prevScore + 1);
    };

    const downVote = () => {
        if (score < data.score) return;
        return setScore((prevScore) => prevScore - 1);
    };

    return (
        <div className='flex flex-col justify-center items-center gap-2 h-max p-3 rounded-xl bg-very-light-gray'>
            <button
                onClick={upVote}
                className='flex justify-center items-center w-5 h-5 border-0 bg-transparent'
            >
                <IconPlus />
            </button>
            <span className='font-medium text-moderate-blue'>{score}</span>
            <button
                onClick={downVote}
                className='flex justify-center items-center w-5 h-5 border-0 bg-transparent'
            >
                <IconMinus />
            </button>
        </div>
    );
}
