import { useState, useContext } from 'react';
import { ModalContext } from './context';
import { Modal } from './Modal'

export function App() {

  const { isOpen, setIsOpen, setModalType, setModalTitle, setModalFields, setModalSave } = useContext(ModalContext);

  const[nome, setNome] = useState();
  const[idade, setIdade] = useState();
  const[cpf, setCpf] = useState();

  function cadastrar(){
    alert("Nome: " + nome + "\n" +
    "Idade: " + idade + "\n" + 
    "cpf: " + cpf);
    console.log(nome);
    setIsOpen(false);
  }

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
        valor: nome,
        func: setNome,
      },
      {
        campo: 'Idade',
        valor: idade,
        func: setIdade
      },
      {
        campo: 'CPF',
        valor: cpf,
        func: setCpf
      }
    ]);
    setIsOpen(prevState => !prevState);
  }

  function openEdit(){
    setModalTitle('Editar');
    setModalType('edit');
    setModalFields([
      {
        campo: 'Nome',
        valor: nome,
        func: setNome,
      },
      {
        campo: 'Idade',
        valor: idade,
        func: setIdade
      },
      {
        campo: 'CPF',
        valor: cpf,
        func: setCpf
      }
    ]);
    setIsOpen(prevState => !prevState);
  }

  function openDelete(){
    setModalTitle('Editar');
    setModalType('edit');
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
      <button onClick={()=> openEdit()}>
        Open edit
      </button>
      <button onClick={()=> openDelete()}>
        Open delete
      </button>
      {
        console.log(isOpen)
      }
      <Modal save={cadastrar}/>
    </>
  )
}
