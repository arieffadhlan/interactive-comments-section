import React from 'react';
import { ReactComponent as IconReply } from '../../assets/icons/icon-reply.svg';
import { ReactComponent as IconEdit } from '../../assets/icons/icon-edit.svg';
import { ReactComponent as IconDelete } from '../../assets/icons/icon-delete.svg';

export default function CardBody({ data, replying, setReplying }) {
    const { user } = data;

    const showAddComment = () => {
        replying === data.id ? setReplying(null) : setReplying(data.id);
    };

    const commentContent = () => {
        const splitContent = data.content.split(' ');
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
            <>
                <span className='mr-1 font-medium text-moderate-blue'>
                    @{user.username}
                </span>
                {data.content}
            </>
        );
    };
    commentContent();

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
                {commentContent()}
            </p>
        </div>
    );
}
