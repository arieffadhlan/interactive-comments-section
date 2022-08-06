import React, { useContext, useState } from 'react';
import { CommentContext } from '../../context/CommentContext';

export default function CardBody({ type, comment, editing, setEditing }) {
    const [content, setContent] = useState(comment.content);
    const commentCtx = useContext(CommentContext);

    const editComment = () => {
        if (type === 'comment') {
            commentCtx.editComment(content, comment.id);
        } else if (type === 'reply') {
            commentCtx.editReply(content, comment.id);
        }
        setEditing(null);
    };

    const commentContent = () => {
        const splitContent = comment.content.split(' ');
        const tag = splitContent.shift();
        const content = splitContent.join(' ');

        return tag.charAt(0) === '@' ? (
            <>
                <span className='mr-1 font-medium text-moderate-blue'>
                    {tag}
                </span>
                {content}
            </>
        ) : (
            <>{comment.content}</>
        );
    };

    return (
        <>
            {editing === comment.id ? (
                <>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder='Add a comment...'
                        className='placeholder:text-grayish-blue resize-none w-full h-[100px] py-3 px-5 rounded-xl border border-solid border-light-gray text-grayish-blue transition delay-50 ease-in focus:outline-none focus:border-grayish-blue'
                    />
                    <button
                        onClick={editComment}
                        className='self-end py-3 px-8 rounded-lg border-0 bg-moderate-blue uppercase font-medium text-white transition delay-50 hover:opacity-90 active:opacity-80'
                    >
                        Update
                    </button>
                </>
            ) : (
                <p className='break-words text-base text-grayish-blue'>
                    {commentContent()}
                </p>
            )}
        </>
    );
}
