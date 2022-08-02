import { createContext, useReducer } from 'react';

const initialCommentState = {
    currentUser: {
        image: {
            png: './images/avatars/image-juliusomo.png',
            webp: './images/avatars/image-juliusomo.webp',
        },
        username: 'juliusomo',
    },
    comments: {},
};

const commentActions = {
    ADD: 'ADD',
    EDIT: 'EDIT',
    DELETE: 'DELETE',
};

const CommentReducer = (state, action) => {
    switch (action.type) {
        case commentActions.ADD:
            console.log(state);
            console.log('Add Comment');
            break;
        case commentActions.EDIT:
            console.log('Edit Comment');
            break;
        case commentActions.DELETE:
            console.log('Delete Comment');
            break;
        default:
            break;
    }
};

export const CommentContext = createContext();

export const CommentProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CommentReducer, initialCommentState);

    const addComment = (comment) => {
        dispatch({
            type: commentActions.ADD,
            payload: comment,
        });
    };

    return (
        <CommentContext.Provider
            value={{
                ...state,
                addComment,
            }}
        >
            {children}
        </CommentContext.Provider>
    );
};

export default CommentProvider;
