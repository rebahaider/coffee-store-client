
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './Components/CoffeeCard';

function App() {

  const coffees = useLoaderData();

  return (
    <>

      <h1 className='text-6xl font-extrabold text-center text-purple-600'>Hot Coffee Cold Coffee Milk Coffee Shop</h1>

      <h2 className='text-3xl text-center mt-20 mb-20'>Available Coffees Numbers Are : {coffees.length}</h2>

      <div className='grid md:grid-cols-2 gap-10'>
      {
        coffees.map(coffee => <CoffeeCard key={coffees._id} coffee={coffee}></CoffeeCard>)
      }
      </div>

    </>
  )
}

export default App
