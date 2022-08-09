import React from 'react';
import TimeAgo from 'timeago-react';
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
                {comment.createdAt.slice(-3) === 'ago' ? (
                    <span className='text-grayish-blue'>
                        {comment.createdAt}
                    </span>
                ) : (
                    <TimeAgo
                        className='text-grayish-blue'
                        datetime={comment.createdAt + 1000 * 11}
                        live={false}
                    />
                )}
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
