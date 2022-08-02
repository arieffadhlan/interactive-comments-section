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

    const addCommentHandler = (newComment) => {
        setComments([...comments, newComment]);
    };

    return (
        <main className='antialiased min-h-screen flex flex-col justify-center items-center gap-5 py-8 bg-very-light-gray'>
            {comments.map((comment) => (
                <Comment
                    key={comment.id}
                    data={comment}
                    addCommentHandler={addCommentHandler}
                />
            ))}
            <AddComment
                replyingTo=''
                addCommentHandler={addCommentHandler}
                width='w-[90%] md:w-[740px]'
            />
        </main>
    );
}
