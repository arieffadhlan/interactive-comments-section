import React, { useContext } from 'react';
import { ReactComponent as IconReply } from '../../assets/icons/icon-reply.svg';
import { ReactComponent as IconEdit } from '../../assets/icons/icon-edit.svg';
import { ReactComponent as IconDelete } from '../../assets/icons/icon-delete.svg';
import { ModalContext } from '../../contexts/ModalContext';

export default function CardButton({
    comment,
    replying,
    setReplying,
    editing,
    setEditing,
}) {
    const modalCtx = useContext(ModalContext);
    const { user } = comment;

    const showAddComment = () => {
        replying === comment.id ? setReplying(null) : setReplying(comment.id);
    };

    const showEditComment = () => {
        editing === comment.id ? setEditing(null) : setEditing(comment.id);
    };

    const showDeleteModal = () => {
        modalCtx.openModal(comment.id);
    };

    return (
        <div className='flex items-center gap-6'>
            {user.username === 'juliusomo' ? (
                <>
                    <button
                        onClick={showDeleteModal}
                        className='flex items-center gap-2 border-0 font-medium text-soft-red bg-transparent'
                    >
                        <IconDelete />
                        Delete
                    </button>
                    <button
                        onClick={showEditComment}
                        className='flex items-center gap-2 border-0 font-medium text-moderate-blue bg-transparent'
                    >
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
    );
}
