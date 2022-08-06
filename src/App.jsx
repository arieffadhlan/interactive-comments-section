import React from 'react';
import CommentProvider from './context/CommentContext';
import Layout from './components/Layout';

export default function App() {
    return (
        <CommentProvider>
            <Layout />
        </CommentProvider>
    );
}
