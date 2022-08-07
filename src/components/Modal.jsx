import React, { useContext } from 'react';
import { CommentContext } from '../contexts/CommentContext';
import { ModalContext } from '../contexts/ModalContext';

export default function Modal({ type, id }) {
    const commentCtx = useContext(CommentContext);
    const modalCtx = useContext(ModalContext);

    const deleteComment = () => {
        if (type === 'comment') {
            commentCtx.deleteComment(id);
        } else if (type === 'reply') {
            commentCtx.deleteReply(id);
        }
        modalCtx.closeModal();
    };

    return (
        <>
            {modalCtx.modal === id ? (
                <div className='fixed z-50 top-0 left-0 w-full h-full flex justify-center items-center bg-black/25 sm:h-screen'>
                    <div className='w-[390px] flex flex-col gap-4 p-7 rounded-[10px] bg-white-color'>
                        <h1 className='text-xl font-bold text-dark-blue'>
                            Delete Comment
                        </h1>
                        <div className='text-base text-grayish-blue'>
                            Are you sure you want to delete this comment? This
                            will remove the comment and can't be undone.
                        </div>
                        <div className='flex justify-between mt-1'>
                            <button
                                onClick={modalCtx.closeModal}
                                className='py-3 px-7 border-0 rounded-[10px] uppercase font-medium text-white-color bg-grayish-blue transition hover:opacity-90 active:opacity-80'
                            >
                                No, Cancel
                            </button>
                            <button
                                onClick={deleteComment}
                                className='py-3 px-7 border-0 rounded-[10px] uppercase font-medium text-white-color bg-soft-red transition hover:opacity-90 active:opacity-80'
                            >
                                Yes, Delete
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                ''
            )}
        </>
    );
}
