import { useLoaderData } from 'react-router-dom'
import './App.css'

function App() {

  const coffees = useLoaderData();
  console.log(coffees)
  return (
    <>
      <h1 className='text-2xl text-purple-700'>A Coffee Store</h1>
      <h1 className='text-xl text-purple-900'>There are Available Coffee: {coffees.length}</h1>
      <div className='grid md:grid-cols-2 gap-2'>

      </div>
    </>
  )
}

export default App
