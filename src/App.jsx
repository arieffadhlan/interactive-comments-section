import React from 'react';
import CommentProvider from './contexts/CommentContext';
import ModalProvider from './contexts/ModalContext';
import Layout from './components/Layout';

export default function App() {
    return (
        <ModalProvider>
            <CommentProvider>
                <Layout />
            </CommentProvider>
        </ModalProvider>
    );
}
