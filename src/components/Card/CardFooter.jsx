import React from 'react';
import CardButton from './CardButton';
import CardVote from './CardVote';

export default function CardFooter({
    comment,
    replying,
    setReplying,
    editing,
    setEditing,
}) {
    return (
        <div className='flex justify-between items-center md:hidden'>
            <CardVote comment={comment} />
            <CardButton
                comment={comment}
                replying={replying}
                setReplying={setReplying}
                editing={editing}
                setEditing={setEditing}
            />
        </div>
    );
}
