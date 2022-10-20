import { useContext } from 'react';
import { ModalContext } from './context';
import { Modal } from './Modal'

export function App() {

  const { isOpen, setIsOpen, setModalType, setModalTitle, setModalFields } = useContext(ModalContext);

  function openAlert(){
    setModalTitle('Alerta');
    setModalType('alert');
    setIsOpen(prevState => !prevState);
  }

  function openAdd(){
    setModalTitle('Cadastro');
    setModalType('add');
    setModalFields([
      {
        campo: 'Nome',
        valor: ''
      },
      {
        campo: 'Idade',
        valor: ''
      },
      {
        campo: 'CPF',
        valor: ''
      }
    ])
    setIsOpen(prevState => !prevState);
  }

  return (
    <>
      Hi!!
      <button onClick={()=> openAlert()}>
        Open
      </button>
      <button onClick={()=> openAdd()}>
        Open Add
      </button>
      {
        console.log(isOpen)
      }
      <Modal />
    </>
  )
}
