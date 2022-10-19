import { useContext } from 'react';
import { ModalContext } from './context';
import { Modal } from './Modal'

export function App() {

  const { setIsOpen } = useContext(ModalContext);

  return (
    <>
      Hi!!
      <button onClick={()=>
        setIsOpen(prevState => !prevState)
      }>
        Open
      </button>
      <Modal />
    </>
  )
}
