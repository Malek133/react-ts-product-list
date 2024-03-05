import {Products} from './data'
import Image from './Image';
import Btn from './ui/Btn';
import { FilePenLine } from 'lucide-react';
import { Trash2 } from 'lucide-react';


const Prods = () => {
    const RenderProducts = Products.map((product) => (
    <div className='border-2 border-gray-300 rounded' 
    key={product.id}>
      <Image className='rounded' 
      imageURL={product.imageUrl} alt={product.title} />

      <div className='flex justify-between items-center my-1 mx-3'>
        <div className='text-center text-lg font-semibold'>
          {product.title}</div>
      <div className='text-center text-xl font-bold'>
        <span className='text-red-800'>{product.price}</span> $</div>
      </div>
      
      <div><p className='my-5 m-2'>{product.description}</p></div>

       <div className='m-5 flex justify-start items-center space-x-1'>
       <div className="h-5 w-5  rounded-full bg-yellow-500" />
        <div className="h-5 w-5  rounded-full bg-sky-900 " />
       <div className="w-5 h-5 rounded-full bg-red-600" />
       <div className="w-5 h-5 rounded-full bg-emerald-700" />
     </div>

      <div className='m-5 flex justify-center items-center space-x-3'>
        <Btn cla="bg-blue-900"><FilePenLine /></Btn>
        <Btn cla="bg-red-700"><Trash2 /></Btn>
      </div>
      
    </div>
      ));
  return (
    <div className='m-5 container grid grid-cols-1 md:grid-cols-2
    lg:grid-cols-3 xl:grid-cols-4 gap-4'>
       {RenderProducts}
    </div>
  )
}

export default Prods


