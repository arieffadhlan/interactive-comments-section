import React, { useState } from 'react';
import AddComment from './AddComment';
import CardBody from './Card/CardBody';
import CardVote from './Card/CardVote';

export default function Reply({ data, addNewComment }) {
    const [replying, setReplying] = useState(null);

    const addReply = (newReply) => {
        addNewComment(newReply);
        setReplying(null);
    };

    return (
        <>
            {data.replies.length >= 1 && (
                <div className='flex flex-col items-center gap-5 ml-12 pl-12 border-l-2 border-solid border-light-gray'>
                    {data.replies.map((reply) => (
                        <div
                            key={reply.id}
                            className='reply flex flex-col gap-5 w-full'
                        >
                            <div className='flex gap-4 p-7 rounded-xl bg-white'>
                                <CardVote data={reply} />
                                <CardBody
                                    data={reply}
                                    replying={replying}
                                    setReplying={setReplying}
                                />
                            </div>
                            {replying === reply.id && (
                                <AddComment
                                    replyingTo={reply.user.username}
                                    addNewComment={addReply}
                                />
                            )}
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}
