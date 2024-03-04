import {Products} from './data'

import Btn from './ui/Btn';
import { FilePenLine } from 'lucide-react';
import { Trash } from 'lucide-react';


const Prods = () => {
    const RenderProducts = Products.map((product) => (
    <div className='border-2 border-gray-300 rounded' 
    key={product.id}>
      <img className='rounded' 
      src={product.imageUrl} alt={product.title} />

      <div className='flex justify-between items-center my-1 mx-3'>
        <div className='text-center text-lg font-semibold'>
          {product.title}</div>
      <div className='text-center text-xl font-bold'>
        <span className='text-red-800'>{product.price}</span> $</div>
      </div>
      
      <div><p className='my-5 m-2'>{product.description}</p></div>

      <div className='m-5 flex justify-center items-center space-x-3'>
        <Btn cla="bg-green-700"><FilePenLine /></Btn>
        <Btn cla="bg-red-700"><Trash /></Btn>
      </div>
      
    </div>
      ));
  return (
    <div className='mx-5 container grid grid-cols-4 gap-4'>
       {RenderProducts}
    </div>
  )
}

export default Prods


