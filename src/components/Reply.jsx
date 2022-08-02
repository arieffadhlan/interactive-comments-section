import React from 'react';
import Card from './Card/Card';

export default function Reply({ comment }) {
    return (
        <>
            {comment.replies.length >= 1 && (
                <div className='flex flex-col items-center gap-5 ml-12 pl-12 border-l-2 border-solid border-light-gray'>
                    {comment.replies.map((reply) => (
                        <Card key={reply.id} data={reply} />
                    ))}
                </div>
            )}
        </>
    );
}
