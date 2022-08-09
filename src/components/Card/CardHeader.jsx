import React from 'react';
import TimeAgo from 'timeago-react';
import CardButton from './CardButton';
import amyrobson from '../../assets/images/avatars/image-amyrobson.webp';
import maxblagun from '../../assets/images/avatars/image-maxblagun.webp';
import ramsesmiron from '../../assets/images/avatars/image-ramsesmiron.webp';

export default function CardHeader({
    comment,
    replying,
    setReplying,
    editing,
    setEditing,
}) {
    const { user } = comment;

    const profilePicture = () => {
        let profilePic = null;
        if (user.username === 'amyrobson') {
            profilePic = amyrobson;
        } else if (user.username === 'maxblagun') {
            profilePic = maxblagun;
        } else if (user.username === 'ramsesmiron') {
            profilePic = ramsesmiron;
        }

        return (
            <img
                src={profilePic}
                alt={user.username}
                className='w-8 h-8 rounded-full bg-cover'
            />
        );
    };

    return (
        <div className='flex justify-between'>
            <div className='flex items-center gap-4'>
                {profilePicture()}
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
