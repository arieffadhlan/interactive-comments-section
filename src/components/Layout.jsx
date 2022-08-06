import React, { useContext } from 'react';
import { CommentContext } from '../context/CommentContext';
import AddComment from './AddComment';
import Comment from './Comment';

export default function Layout() {
    const commentCtx = useContext(CommentContext);
    const comments = commentCtx.comments;

    return (
        <main className='antialiased min-h-screen flex flex-col justify-center items-center gap-5 py-8 bg-very-light-gray'>
            {comments.map((comment) => (
                <Comment key={comment.id} comment={comment} />
            ))}
            <AddComment type='comment' />
        </main>
    );
}
