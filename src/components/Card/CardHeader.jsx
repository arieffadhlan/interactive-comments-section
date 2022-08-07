import React from 'react';
import CardButton from './CardButton';

export default function CardHeader({
    comment,
    replying,
    setReplying,
    editing,
    setEditing,
}) {
    const { user } = comment;

    return (
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
                <span className='text-grayish-blue'>{comment.createdAt}</span>
            </div>
            <div className='hidden md:flex'>
                <CardButton
                    comment={comment}
                    replying={replying}
                    setReplying={setReplying}
                    editing={editing}
                    setEditing={setEditing}
                />
            </div>
        </div>
    );
}
