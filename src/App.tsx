
import './App.css'
import Prods from './components/Prods'
import Btn from './components/ui/Btn'
 import Modal from './components/ui/Modal'
function App() {
 
  
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
        <Btn cla='bg-sky-900 text-xl' wi='w-fit'>
      Clicked
     </Btn>
      </div>
      <Modal />
     

     <Prods />
    
    </>
  )
}

export default App
