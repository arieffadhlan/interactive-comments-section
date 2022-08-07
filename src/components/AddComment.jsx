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

    const replyTag = replyingTo !== '' ? `@${replyingTo}` : '';

    const commentHandler = () => {
        if (content === '') return;
        const data = {
            id: +new Date(),
            content: `${replyTag} ${content}`,
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

        if (type === 'comment') {
            commentCtx.addComment(data);
            setContent('');
        } else if (type === 'reply') {
            commentCtx.addReply([...comment.replies, data], comment.id);
            setContent('');
            setReplying(null);
        }
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
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder='Add a comment...'
                className='placeholder:text-grayish-blue resize-none w-full h-[100px] py-3 px-5 rounded-xl border border-solid border-light-gray text-grayish-blue transition delay-50 ease-in focus:outline-none focus:border-grayish-blue'
            />
            <div>
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
