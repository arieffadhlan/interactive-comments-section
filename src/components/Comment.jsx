import React, { useState } from 'react';
import AddComment from './AddComment';
import CardBody from './Card/CardBody';
import CardHeader from './Card/CardHeader';
import CardVote from './Card/CardVote';
import Reply from './Reply';

export default function Comment({ comment }) {
    const [replying, setReplying] = useState(null);
    const [editing, setEditing] = useState(null);

    return (
        <div className='flex flex-col gap-5 w-[90%] md:w-[740px]'>
            <div className='flex gap-4 p-7 rounded-xl bg-white'>
                <CardVote comment={comment} />
                <div className='flex flex-col w-full gap-4'>
                    <CardHeader
                        comment={comment}
                        replying={replying}
                        setReplying={setReplying}
                        editing={editing}
                        setEditing={setEditing}
                    />
                    <CardBody
                        type='comment'
                        comment={comment}
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
                    replyingTo={comment.user.username}
                />
            )}
            <Reply comment={comment} />
        </div>
    );
}
