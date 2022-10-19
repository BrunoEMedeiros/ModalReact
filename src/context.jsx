import { useState, createContext } from "react";

/*
    types: 
    1 - alert
    2 - create
    3 - edit
    4 - delete
*/

export const ModalContext = createContext({
    type: 1,
    title: 'Alert',
    msg: 'Iam the modal',
    button: 'Confirm' 
})

export const ModalProvider = ({children}) =>{

    const[isOpen, setIsOpen] = useState(false);

    const[modalType, setModalType] = useState(1);
    const[modalTitle, setModalTitle] = useState('Iam the modal');
    const[modalFields, setModalFields] = useState([]);

    return(
        <ModalContext.Provider value={{ isOpen, setIsOpen, modalType, setModalType, modalTitle, setModalTitle, modalFields, setModalFields }}>
            {children}
        </ModalContext.Provider>
    )

}