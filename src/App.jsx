import { useEffect, useState } from 'react';
import AddComment from './components/AddComment';
import Comment from './components/Comment';

export default function App() {
    const [comments, setComments] = useState([]);

    const getData = async () => {
        const res = await fetch('./data/data.json');
        const data = await res.json();
        setComments(data.comments);
    };

    useEffect(() => {
        getData();
    }, []);

    const addNewComment = (newComment) => {
        setComments([...comments, newComment]);
    };

    const addNewReply = (replies, commentId) => {
        comments.map((comment) => {
            if (comment.id === commentId) {
                comment.replies = [...replies];
            }
        });
    };

    return (
        <main className='antialiased min-h-screen flex flex-col justify-center items-center gap-5 py-8 bg-very-light-gray'>
            {comments.map((comment) => (
                <Comment
                    key={comment.id}
                    data={comment}
                    addNewComment={addNewReply}
                />
            ))}
            <AddComment replyingTo='' addNewComment={addNewComment} />
        </main>
    );
}
