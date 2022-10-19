import { useState } from 'react'
import { Modal } from './Modal'

export function App() {

  const[isOpen, setIsOpen] = useState(false)

  return (
    <>
      Hi!!
      <button onClick={()=>
        setIsOpen(prevState => !prevState)
      }>
        Open
      </button>
      <Modal open={isOpen} close={setIsOpen} />
    </>
  )
}
