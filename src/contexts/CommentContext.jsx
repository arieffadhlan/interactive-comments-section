import { createContext, useEffect, useReducer } from 'react';

const initialCommentState = [];

const commentActions = {
    SET_COMMENT: 'SET_COMMENT',
    ADD_COMMENT: 'ADD_COMMENT',
    EDIT_COMMENT: 'EDIT_COMMENT',
    DELETE_COMMENT: 'DELETE_COMMENT',
};

const replyActions = {
    ADD_REPLY: 'ADD_REPLY',
    EDIT_REPLY: 'EDIT_REPLY',
    DELETE_REPLY: 'DELETE_REPLY',
};

const CommentReducer = (state, action) => {
    switch (action.type) {
        case commentActions.SET_COMMENT:
            return action.payload;
        case commentActions.ADD_COMMENT:
            return [...state, action.payload.newComment];
        case commentActions.EDIT_COMMENT:
            state.map((comment) => {
                if (comment.id === action.payload.commentId) {
                    comment.content = action.payload.content;
                }
            });
            return [...state];
        case commentActions.DELETE_COMMENT:
            return state.filter(
                (comment) => comment.id !== action.payload.commentId
            );
        case replyActions.ADD_REPLY:
            state.map((comment) => {
                if (comment.id === action.payload.commentId) {
                    comment.replies = [...action.payload.replies];
                }
            });
            return [...state];
        case replyActions.EDIT_REPLY:
            state.map((comment) => {
                comment.replies.map((reply) => {
                    if (reply.id === action.payload.replyId) {
                        reply.content = action.payload.content;
                    }
                });
            });
            return [...state];
        case replyActions.DELETE_REPLY:
            state.map((comment) => {
                comment.replies = comment.replies.filter(
                    (reply) => reply.id !== action.payload.replyId
                );
            });
            return [...state];
        default:
            return [...state];
    }
};

export const CommentContext = createContext();

export const CommentProvider = ({ children }) => {
    const [comments, dispatch] = useReducer(
        CommentReducer,
        initialCommentState
    );

    const getData = async () => {
        const res = await fetch('./data/data.json');
        const data = await res.json();
        const comments = data.comments;
        dispatch({
            type: commentActions.SET_COMMENT,
            payload: [...comments],
        });
    };

    useEffect(() => {
        if (localStorage.getItem('comments') !== null) {
            dispatch({
                type: commentActions.SET_COMMENT,
                payload: JSON.parse(localStorage.getItem('comments')),
            });
        } else {
            getData();
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('comments', JSON.stringify(comments));
    }, [comments]);

    const addComment = (newComment) => {
        dispatch({
            type: commentActions.ADD_COMMENT,
            payload: { newComment },
        });
    };

    const editComment = (content, commentId) => {
        dispatch({
            type: commentActions.EDIT_COMMENT,
            payload: { content, commentId },
        });
    };

    const deleteComment = (commentId) => {
        dispatch({
            type: commentActions.DELETE_COMMENT,
            payload: { commentId },
        });
    };

    const addReply = (replies, commentId) => {
        dispatch({
            type: replyActions.ADD_REPLY,
            payload: { replies, commentId },
        });
    };

    const editReply = (content, replyId) => {
        dispatch({
            type: replyActions.EDIT_REPLY,
            payload: { content, replyId },
        });
    };

    const deleteReply = (replyId) => {
        dispatch({
            type: replyActions.DELETE_REPLY,
            payload: { replyId },
        });
    };

    return (
        <CommentContext.Provider
            value={{
                comments,
                addComment,
                editComment,
                deleteComment,
                addReply,
                editReply,
                deleteReply,
            }}
        >
            {children}
        </CommentContext.Provider>
    );
};

export default CommentProvider;
