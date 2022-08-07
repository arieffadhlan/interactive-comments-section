import React, { useState } from 'react';
import AddComment from './AddComment';
import CardBody from './Card/CardBody';
import CardFooter from './Card/CardFooter';
import CardHeader from './Card/CardHeader';
import CardVote from './Card/CardVote';
import Modal from './Modal';

export default function Reply({ comment }) {
    const [replying, setReplying] = useState(null);
    const [editing, setEditing] = useState(null);

    console.log(replying);

    return (
        <>
            {comment.replies.length >= 1 && (
                <div className='flex flex-col items-center gap-5 pl-4 border-l-2 border-solid border-light-gray md:ml-12 md:pl-12'>
                    {comment.replies.map((reply) => (
                        <div
                            key={reply.id}
                            className='w-full flex flex-col gap-5'
                        >
                            <div className='flex gap-6 p-5 rounded-xl bg-white md:p-7'>
                                <div className='hidden md:flex'>
                                    <CardVote comment={reply} />
                                </div>
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
                                        replyingTo={reply.replyingTo}
                                        editing={editing}
                                        setEditing={setEditing}
                                    />
                                    <CardFooter
                                        comment={reply}
                                        replying={replying}
                                        setReplying={setReplying}
                                        editing={editing}
                                        setEditing={setEditing}
                                    />
                                </div>
                            </div>
                            {replying === reply.id && (
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
