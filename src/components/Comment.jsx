import React, { useState } from 'react';
import AddComment from './AddComment';
import CardBody from './Card/CardBody';
import CardVote from './Card/CardVote';
import Reply from './Reply';

export default function Comment({ data, addNewComment }) {
    const [replying, setReplying] = useState(null);

    const addReply = (newReply) => {
        const replies = [...data.replies, newReply];
        addNewComment(replies, data.id);
        setReplying(null);
    };

    return (
        <div className='flex flex-col gap-5 w-[90%] md:w-[740px]'>
            <div className='flex gap-4 p-7 rounded-xl bg-white'>
                <CardVote data={data} />
                <CardBody
                    data={data}
                    replying={replying}
                    setReplying={setReplying}
                />
            </div>
            {replying && (
                <AddComment
                    replying={replying}
                    replyingTo={data.user.username}
                    addNewComment={addReply}
                />
            )}
            <Reply data={data} addNewComment={addReply} />
        </div>
    );
}
