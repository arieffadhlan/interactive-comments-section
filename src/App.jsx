import { useEffect, useState } from 'react';
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

    return (
        <div className='min-h-screen flex flex-col justify-center items-center gap-5 py-8 bg-very-light-gray'>
            {comments.map((comment) => (
                <Comment key={comment.id} comment={comment} />
            ))}
        </div>
    );
}
