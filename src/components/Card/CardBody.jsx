import React, { useContext } from 'react';
import { CommentContext } from '../../context/CommentContext';
import { ReactComponent as IconReply } from '../../assets/icons/icon-reply.svg';
import { ReactComponent as IconEdit } from '../../assets/icons/icon-edit.svg';
import { ReactComponent as IconDelete } from '../../assets/icons/icon-delete.svg';

export default function CardBody({ data, showAddReply, setShowAddReply }) {
    const { user } = data;

    const showAddComment = () => {
        showAddReply === data.id
            ? setShowAddReply(null)
            : setShowAddReply(data.id);
    };

    return (
        <div className='flex flex-col w-full gap-4'>
            <div className='flex justify-between'>
                <div className='flex items-center gap-4'>
                    <img
                        src={`./src/assets/images/avatars/image-${user.username}.webp`}
                        alt={user.username}
                        className='w-8 h-8 rounded-full bg-cover'
                    />
                    <span className='font-medium text-dark-blue'>
                        {user.username}
                    </span>
                    <span className='text-grayish-blue'>{data.createdAt}</span>
                </div>
                <div className='flex items-center gap-6'>
                    {user.username === 'juliusomo' ? (
                        <>
                            <button className='flex items-center gap-2 border-0 font-medium text-soft-red bg-transparent'>
                                <IconDelete />
                                Delete
                            </button>
                            <button className='flex items-center gap-2 border-0 font-medium text-moderate-blue bg-transparent'>
                                <IconEdit />
                                Edit
                            </button>
                        </>
                    ) : (
                        <button
                            onClick={showAddComment}
                            className='flex items-center gap-2 border-0 font-medium text-moderate-blue bg-transparent'
                        >
                            <IconReply />
                            Reply
                        </button>
                    )}
                </div>
            </div>
            <p className='break-words text-base text-grayish-blue'>
                {typeof data.replyingTo !== 'undefined' && (
                    <span className='mr-1 font-medium text-moderate-blue'>
                        @{user.username}
                    </span>
                )}
                {data.content}
            </p>
        </div>
    );
}
