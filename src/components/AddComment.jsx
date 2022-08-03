import React, { useState } from 'react';
import clsx from 'clsx';
import currentUser from '../assets/images/avatars/image-juliusomo.webp';

export default function AddComment({ replyingTo, addNewComment }) {
    const [commentText, setCommentText] = useState('');
    const replyTag = replyingTo !== '' ? `@${replyingTo}` : '';

    const onChangeHandler = (e) => setCommentText(e.target.value);

    const commentHandler = () => {
        if (commentText === '') return;
        const newComment = {
            id: +new Date(),
            content: `${replyTag} ${commentText}`,
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
        addNewComment(newComment);
        setCommentText('');
    };

    return (
        <div
            className={clsx('flex gap-4 p-7 rounded-xl bg-white', {
                ['w-[90%] md:w-[740px]']: replyingTo === '',
                ['full']: replyingTo !== '',
            })}
        >
            <img
                src={currentUser}
                alt='juliusomo'
                className='w-9 h-9 rounded-full'
            />
            <textarea
                value={commentText}
                onChange={onChangeHandler}
                placeholder='Add a comment...'
                className='placeholder:text-grayish-blue resize-none w-full h-[100px] py-3 px-5 rounded-xl border border-solid border-light-gray text-grayish-blue transition delay-50 ease-in focus:outline-none focus:border-grayish-blue'
            />
            <div>
                <button
                    onClick={commentHandler}
                    className='py-3 px-8 rounded-lg border-0 bg-moderate-blue uppercase font-medium text-white transition delay-50 hover:opacity-90 active:opacity-80'
                >
                    {replyingTo === '' ? 'Send' : 'Reply'}
                </button>
            </div>
        </div>
    );
}
