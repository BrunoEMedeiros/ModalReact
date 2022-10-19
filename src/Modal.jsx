
import { useContext } from "react";
import { ModalContext } from "./context";
import { Container, Header, Content, Overlay, Campo } from "./style"
import { AiFillCloseCircle } from 'react-icons/ai'

export function Modal(){

    const { 
        isOpen, setIsOpen,
        modalType, setModalType,
        modalTitle,
        modalFields, setModalFields 
      } = useContext(ModalContext);

    if(!isOpen) return null

    if(isOpen){
        switch(modalType){
            case 'alert':
                return(
                <Overlay id="fundo" onClick={()=> setIsOpen(false)}>
                <Container>
                    <Header>
                        <h2>{modalTitle}</h2>
                        <button onClick={()=> setIsOpen(prevState => !prevState)}>
                            <AiFillCloseCircle />
                        </button>
                    </Header>
                    <Content>
                        <h3>
                            Modal body
                        </h3>
                        <button onClick={()=> setIsOpen(prevState => !prevState)}>
                            Close
                        </button>
                    </Content>
                </Container>
            </Overlay>)
        }
}}