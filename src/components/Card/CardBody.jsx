import React from 'react';
import { ReactComponent as IconReply } from '../../assets/icons/icon-reply.svg';

export default function CardBody({ data }) {
    const { user } = data;

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
                <div>
                    <button className='flex items-center gap-2 border-0 font-medium text-moderate-blue bg-transparent'>
                        <IconReply />
                        Reply
                    </button>
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
