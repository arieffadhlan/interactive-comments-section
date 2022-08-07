import { createContext, useState } from 'react';

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [modal, setModal] = useState(null);

    const openModal = (commentId) => {
        document.body.style.overflow = 'hidden';
        setModal(commentId);
    };

    const closeModal = () => {
        document.body.style.overflow = 'visible';
        setModal(null);
    };

    return (
        <ModalContext.Provider value={{ modal, openModal, closeModal }}>
            {children}
        </ModalContext.Provider>
    );
};

export default ModalProvider;
