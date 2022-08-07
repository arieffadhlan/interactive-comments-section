import React, { useContext, useState } from 'react';
import clsx from 'clsx';
import { CommentContext } from '../contexts/CommentContext';
import currentUser from '../assets/images/avatars/image-juliusomo.webp';

export default function AddComment({
    type,
    comment,
    setReplying,
    replyingTo = '',
}) {
    const [content, setContent] = useState('');
    const commentCtx = useContext(CommentContext);

    // const replyTag = replyingTo !== '' ? `@${replyingTo}` : '';

    const commentHandler = () => {
        if (content === '') return;

        if (type === 'comment') {
            const commentData = {
                id: +new Date(),
                content: `${content}`,
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
            commentCtx.addComment(commentData);
            setContent('');
        } else if (type === 'reply') {
            const replyData = {
                id: +new Date(),
                content: `${content}`,
                createdAt: '1 minute ago',
                score: 0,
                replyingTo: `${replyingTo}`,
                user: {
                    image: {
                        png: './images/avatars/image-juliusomo.png',
                        webp: './images/avatars/image-juliusomo.webp',
                    },
                    username: 'juliusomo',
                },
                replies: [],
            };
            commentCtx.addReply([...comment.replies, replyData], comment.id);
            setContent('');
            setReplying(null);
        }
    };

    return (
        <div
            className={clsx(
                'flex flex-col gap-5 p-7 rounded-xl bg-white md:flex-row',
                {
                    ['w-[90%] md:w-[740px]']: replyingTo === '',
                    ['full']: replyingTo !== '',
                }
            )}
        >
            <img
                src={currentUser}
                alt='juliusomo'
                className='hidden w-9 h-9 rounded-full md:block'
            />
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder='Add a comment...'
                className='placeholder:text-grayish-blue resize-none w-full h-[100px] py-3 px-5 rounded-xl border border-solid border-light-gray text-grayish-blue transition delay-50 ease-in focus:outline-none focus:border-grayish-blue'
            />
            <div className='flex justify-between items-center md:items-start'>
                <img
                    src={currentUser}
                    alt='juliusomo'
                    className='block w-9 h-9 rounded-full md:hidden'
                />
                <button
                    onClick={commentHandler}
                    className='py-3 px-8 rounded-lg border-0 bg-moderate-blue uppercase font-medium text-white transition hover:opacity-90 active:opacity-80'
                >
                    {replyingTo === '' ? 'Send' : 'Reply'}
                </button>
            </div>
        </div>
    );
}
