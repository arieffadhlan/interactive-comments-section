import React, { useState } from 'react';
import currentUser from '../assets/images/avatars/image-juliusomo.webp';

export default function AddComment({ replyingTo, addCommentHandler, width }) {
    const [commentText, setCommentText] = useState('');

    const onChangeHandler = (e) => setCommentText(e.target.value);

    const addNewComment = () => {
        if (commentText === '') return;
        const newComment = {
            id: +new Date(),
            content: `${commentText}`,
            createdAt: '1 minute ago',
            score: 0,
            user: {
                image: {
                    png: './images/avatars/image-juliusomo.png',
                    webp: './images/avatars/image-juliusomo.webp',
                },
                username: 'juliusomo',
            },
            replies: [],
        };
        addCommentHandler(newComment);
        setCommentText('');
    };

    return (
        <div className={`flex gap-4 p-7 ${width} rounded-xl bg-white`}>
            <img
                src={currentUser}
                alt='juliusomo'
                className='w-9 h-9 rounded-full'
            />
            <textarea
                value={commentText}
                onChange={onChangeHandler}
                placeholder='Add a comment...'
                className=' placeholder:text-grayish-blue resize-none w-full h-[100px] py-3 px-5 rounded-xl border border-solid border-light-gray text-grayish-blue transition delay-50 ease-in focus:outline-none focus:border-grayish-blue'
            />
            <div>
                <button
                    onClick={addNewComment}
                    className='py-3 px-8 rounded-lg border-0 bg-moderate-blue uppercase font-medium text-white transition delay-50 hover:opacity-90 active:opacity-80'
                >
                    Send
                </button>
            </div>
        </div>
    );
}
