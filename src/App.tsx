
import { ChangeEvent, FormEvent, useState } from 'react'
import './App.css'
import Prods from './components/Prods'
import Btn from './components/ui/Btn'
 import Modal from './components/ui/Modal'
import { Products, formInputsList } from './components/data'
import Input from './components/ui/Input'
 import ErrorMessage from './components/ErrorMessage'
import { IProduct } from './components/interface'
import { productValidation } from './components/validation'
import { v4 as uuid } from "uuid";

function App() {
  const ObjPro:IProduct = { title: "",des: "", imageUrl: "", price: "" }
  const [product,setProduct] = useState<IProduct>( ObjPro);
  const [productss,setProductss] = useState<IProduct[]>(Products);
  const [errors,setErrors] = useState({  title: "", 
  des: "", imageUrl: "", price: "" });
  const [isOpen, setIsOpen] = useState(false)

  const closeModal= () => {setIsOpen(false)}
  const openModal= () => {setIsOpen(true)}

  const onCancel = () => {
     closeModal()
    setProduct(ObjPro)
  };

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

  const submitHandler = (e: 
    FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const { title, des,
       price, imageUrl } = product;

    const errors = productValidation({
      title, des,
       price, imageUrl
    });
    
    const hasErrorMsg =
    Object.values(errors).some(value => value === "") && 
    Object.values(errors).every(value => value === "");
    
  if (!hasErrorMsg) {
    setErrors(errors);
    return;
  }

  setProductss(prec => [ {...product,id:uuid()},...prec]);
  closeModal()
  setProduct(ObjPro)
  
  }

  //Renders
 const RenderProductList = productss.map((product) =>(
  <Prods key={product.id} product={product} />
   ));


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
         <form onSubmit={submitHandler}>
          <div className='m-5 flex flex-col space-y-4'>
            {renderFormInputList}
          </div>
        
        <div className='flex justify-center space-x-3'>

           <Btn onClick={onCancel} 
           cla='bg-sky-700 hover:bg-sky-600'>
            Cancel</Btn>

        <Btn cla='bg-red-700 hover:bg-red-600'>
          Submit</Btn>

        </div>
       
         </form>
      </Modal>
     
      <div className='m-5 container grid grid-cols-1 md:grid-cols-2
    lg:grid-cols-3 gap-8'>
       {RenderProductList} 
      </div>
     
    
    </>
  )
}

export default App
