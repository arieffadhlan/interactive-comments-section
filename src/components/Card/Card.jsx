import React from 'react';
import CardBody from './CardBody';
import CardVote from './CardVote';

export default function Card({ data }) {
    return (
        <div className='flex gap-4 p-7 rounded-xl bg-white'>
            <CardVote data={data} />
            <CardBody data={data} />
        </div>
    );
}
