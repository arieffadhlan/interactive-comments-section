import React from 'react';
import Card from './Card/Card';
import Reply from './Reply';

export default function Comment({ comment }) {
    return (
        <div className='flex flex-col gap-5 w-[90%] md:w-[740px]'>
            <Card data={comment} />
            <Reply comment={comment} />
        </div>
    );
}
