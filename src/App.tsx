
import { ChangeEvent, useState } from 'react'
import './App.css'
import Prods from './components/Prods'
import Btn from './components/ui/Btn'
 import Modal from './components/ui/Modal'
import { formInputsList } from './components/data'
import Input from './components/ui/Input'
 import ErrorMessage from './components/ErrorMessage'
import { IProduct } from './components/interface'

function App() {
  const [product,setProduct] = useState<IProduct>(
    { title: "",des: "", imageUrl: "", price: "" });
  const [errors,setErrors] = useState({  title: "", 
  des: "", imageUrl: "", price: "" });
  const [isOpen, setIsOpen] = useState(false)

  const closeModal= () => {setIsOpen(false)}
  const openModal= () => {setIsOpen(true)}

  const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) =>{
    const { value, name } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  }


  // inputs 
 const renderFormInputList = formInputsList.map((i) => (
  <div className="flex flex-col" key={i.id}>
    <label htmlFor={i.id} 
    className="mb-[2px] text-sm font-medium
     text-gray-700">
      {i.label}
    </label>
    <Input type="text" id={i.id} 
    name={i.name}   
    className='border-2 border-gray-350'
     value={product[i.name]} onChange={onChangeHandler}
   
    />
     <ErrorMessage msg={errors[i.name]} /> 
  </div>
    ));
  
  return (
    <>
     <h1 className='text-sky-950 m-4 text-center text-4xl font-bold'> 
     Alphazero 
     <span className='text-red-600'> E-comm</span>
     </h1>

     <Btn cla='bg-red-500 text-2xl font-semibold'>
      Dashboard
     </Btn>

      <div className='container flex justify-end items-center'>
        <Btn onClick={openModal} cla='bg-sky-900 text-xl' wi='w-fit'>
      Clicked
     </Btn>
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal} 
      title='add new product' >
         <form>
          <div className='m-5 flex flex-col space-y-4'>
            {renderFormInputList}
          </div>
        
        <div className='flex justify-center space-x-3'>

           <Btn onClick={closeModal} 
           cla='bg-sky-700 hover:bg-sky-600'>
            Cancel</Btn>

        <Btn cla='bg-red-700 hover:bg-red-600'>
          Submit</Btn>

        </div>
       
         </form>
      </Modal>
     

     <Prods />
    
    </>
  )
}

export default App
