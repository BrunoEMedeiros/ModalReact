
import { useContext, useEffect } from "react";
import { ModalContext } from "./context";
import { Container, Header, Content, Overlay, Campo, BotaoFechar, Buttons, Alert } from "./style"
import { AiFillCloseCircle } from 'react-icons/ai'
import { TbAlertTriangle } from 'react-icons/tb'

export function Modal(){

    const { 
        isOpen, setIsOpen,
        modalType, setModalType,
        modalTitle,
        modalFields, setModalFields,
        modalMsg
      } = useContext(ModalContext);

    if(!isOpen) return null

    if(isOpen){
        switch(modalType){
            case 'alert':
                return(
                <Overlay id="fundo">
                    <Container>
                        <Header>
                            <Alert>
                                <TbAlertTriangle />
                                <strong>{modalTitle}</strong>
                            </Alert>
                            <BotaoFechar onClick={()=> setIsOpen(prevState => !prevState)}>
                                <AiFillCloseCircle />
                            </BotaoFechar>
                        </Header>
                        <Content>
                        <small>
                                {modalMsg}
                        </small>
                        </Content>
                    </Container>
                </Overlay>
                )
            case 'add':
                return(
                    <Overlay id="fundo">
                    <Container>
                        <Header>
                            <Alert>
                                <strong>{modalTitle}</strong>
                            </Alert>
                            <BotaoFechar onClick={()=> setIsOpen(prevState => !prevState)}>
                                <AiFillCloseCircle />
                            </BotaoFechar>
                        </Header>
                        <Content>
                            {
                                modalFields.map((data)=>(
                                    <Campo type="text" placeholder={data.campo}/>
                                ))
                            }
                        </Content>
                        <Buttons>
                            <button>
                                Salvar
                            </button>
                        </Buttons>
                    </Container>
                </Overlay>
                )
        }
}}