import { createContext, useEffect, useReducer, useState } from 'react';

const initialCommentState = {
    currentUser: {
        image: {
            png: './images/avatars/image-juliusomo.png',
            webp: './images/avatars/image-juliusomo.webp',
        },
        username: 'juliusomo',
    },
    comments: [],
};

const commentActions = {
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
        case commentActions.ADD_COMMENT:
            return {
                ...state,
                comments: [...state.comments, action.payload.newComment],
            };
        case commentActions.EDIT_COMMENT:
            state.comments.map((comment) => {
                if (comment.id === action.payload.commentId) {
                    comment.content = action.payload.content;
                }
            });
            return { ...state };
        case replyActions.ADD_REPLY:
            state.comments.map((comment) => {
                if (comment.id === action.payload.commentId) {
                    comment.replies = [...action.payload.replies];
                }
            });
            return { ...state };
        case replyActions.EDIT_REPLY:
            state.comments.map((comment) => {
                comment.replies.map((reply) => {
                    if (reply.id === action.payload.replyId) {
                        reply.content = action.payload.content;
                    }
                });
            });
            return { ...state };
        default:
            break;
    }
};

export const CommentContext = createContext();

export const CommentProvider = ({ children }) => {
    const [comments, setComments] = useState([]);
    const [state, dispatch] = useReducer(CommentReducer, initialCommentState);

    const getData = async () => {
        const res = await fetch('./data/data.json');
        const data = await res.json();
        setComments(data.comments);
        initialCommentState.comments = data.comments;
    };

    useEffect(() => {
        getData();
    }, []);

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

    return (
        <CommentContext.Provider
            value={{
                ...state,
                addComment,
                editComment,
                addReply,
                editReply,
            }}
        >
            {children}
        </CommentContext.Provider>
    );
};

export default CommentProvider;
