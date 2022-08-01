import React from 'react';
import CardBody from './CardBody';
import CardVote from './CardVote';

export default function Card({ comment }) {
    return (
        <div className='flex flex-col w-[90%] md:w-[735px]'>
            <div className='flex gap-4 p-7 rounded-xl bg-white'>
                <CardVote comment={comment} />
                <CardBody comment={comment} />
            </div>
        </div>
    );
}
