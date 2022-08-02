import React, { useState } from 'react';
import AddComment from './AddComment';
import CardBody from './Card/CardBody';
import CardVote from './Card/CardVote';
import Reply from './Reply';

export default function Comment({ data, addCommentHandler }) {
    const [showAddReply, setShowAddReply] = useState(null);

    return (
        <div className='flex flex-col gap-5 w-[90%] md:w-[740px]'>
            <div className='flex gap-4 p-7 rounded-xl bg-white'>
                <CardVote data={data} />
                <CardBody
                    data={data}
                    showAddReply={showAddReply}
                    setShowAddReply={setShowAddReply}
                />
            </div>
            {showAddReply && (
                <AddComment
                    replyingTo={data.user.username}
                    addCommentHandler={addCommentHandler}
                    width='full'
                />
            )}
            <Reply data={data} />
        </div>
    );
}
