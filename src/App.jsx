import { useEffect, useState } from 'react';
import Card from './components/Card/Card';

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
        <div className='min-h-screen flex flex-col justify-center items-center gap-4 py-8 bg-very-light-gray'>
            {comments.map((comment) => (
                <Card key={comment.id} comment={comment} />
            ))}
        </div>
    );
}
