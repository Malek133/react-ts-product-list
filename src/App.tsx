
import './App.css'
import Prods from './components/Prods'
import Btn from './components/ui/Btn'
function App() {
 
  
  return (
    <>
     <h1 className=' m-4 text-center text-4xl font-bold'> 
     Alphazero</h1>

     <Btn cla='bg-red-600'>
      Click me!
     </Btn>

     <Btn cla='bg-black' wi='w-fit'>
      Clicked
     </Btn>

     <Prods />
    
    </>
  )
}

export default App
