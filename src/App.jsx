import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';

function App() {

  const coffees = useLoaderData();
  console.log(coffees)
  return (
    <>
      <div className="text-center mb-5">
        <h1 className='text-2xl text-purple-700'>A Coffee Store</h1>
        <h1 className='text-xl text-purple-900'>There are Available Coffee: {coffees.length}</h1>
      </div>
      <div className='grid md:grid-cols-2 md:w-9/12 mx-auto gap-4'>
        {
          coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
        }
      </div>
    </>
  )
}

export default App
