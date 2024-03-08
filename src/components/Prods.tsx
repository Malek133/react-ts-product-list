
// import {Products} from './data'
import Image from './ui/Image';
import { IProduct } from './interface';
import Btn from './ui/Btn';
import { FilePenLine } from 'lucide-react';
import { Trash2 } from 'lucide-react';


interface IProps {
  product:IProduct
  setProductToEdit:( product:IProduct) => void
  openEditModal:() => void
  setProductToEditIdx : (value:number) => void
  idx:number
  
}

const Prods = ({product,setProductToEdit,openEditModal
  ,idx,setProductToEditIdx}:IProps) => {

  const onEdit = () =>{
    setProductToEdit(product)
    openEditModal()
    setProductToEditIdx(idx)
  }

  return (

    <div className='m-5 container'>
       <div className='border-2 border-gray-300 rounded' 
    key={product.id}>
      <Image className='container mb-4 rounded h-96' 
      imageURL={product.imageUrl} alt={product.title} />

      <div className='flex justify-between items-center my-1 mx-3'>
        <div className='text-center text-lg font-semibold'>
          {product.title}</div>
      <div className='text-center text-xl font-bold'>
        <span className='text-red-800'>{product.price}</span> $</div>
      </div>
      
      <div>
        <p className='my-5 m-2'>{product.des}</p>
        </div>

     

      <div className='m-5 flex justify-center items-center space-x-3'>
        <Btn onClick={onEdit} cla="bg-blue-900"><FilePenLine /></Btn>
        <Btn cla="bg-red-700"><Trash2 /></Btn>
      </div>
      
    </div>
    </div>
   
  )
}

export default Prods


