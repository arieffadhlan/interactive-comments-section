import React, { useState } from 'react';
import AddComment from './AddComment';
import CardBody from './Card/CardBody';
import CardHeader from './Card/CardHeader';
import CardVote from './Card/CardVote';
import Modal from './Modal';

export default function Reply2({ comment }) {
    const [replying, setReplying] = useState(null);
    const [editing, setEditing] = useState(null);

    return (
        <>
            {comment.replies.length >= 1 && (
                <div className='flex flex-col items-center gap-5 ml-12 pl-12 border-l-2 border-solid border-light-gray'>
                    {comment.replies.map((reply) => (
                        <div
                            key={reply.id}
                            className='w-full flex flex-col gap-5'
                        >
                            <div className='flex gap-4 p-7 rounded-xl bg-white'>
                                <CardVote comment={reply} />
                                <div className='flex flex-col w-full gap-4'>
                                    <CardHeader
                                        comment={reply}
                                        replying={replying}
                                        setReplying={setReplying}
                                        editing={editing}
                                        setEditing={setEditing}
                                    />
                                    <CardBody
                                        type='reply'
                                        comment={reply}
                                        editing={editing}
                                        setEditing={setEditing}
                                    />
                                </div>
                            </div>
                            {replying && (
                                <AddComment
                                    type='reply'
                                    comment={comment}
                                    setReplying={setReplying}
                                    replyingTo={reply.user.username}
                                />
                            )}
                            <Modal type='reply' id={reply.id} />
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}
