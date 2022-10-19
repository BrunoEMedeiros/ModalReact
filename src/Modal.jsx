
import { Container, Header, Content, Overlay } from "./style"

export function Modal({open, close}){

    if(!open) return null

    if(open){
    return(
        <Overlay id="fundo" onClick={()=> close(false)}>
            <Container id="modal">
                <Header>
                    <h2>Iam the Modal</h2>
                </Header>
                <Content>
                    <button onClick={()=> close(prevState => !prevState)}>
                        Close
                    </button>
                </Content>
            </Container>
        </Overlay>
    )
}}