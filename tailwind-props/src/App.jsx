import './App.css'
import Card from './components/Card'
import TailwindCard from './components/TailwindCard'

function App() {
  

  return (
    <>
     <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite with Tailwind</h1>
     {/* <Card /> */}
     <TailwindCard username="kalal" post="SDE 1" />
     <TailwindCard username="chandra" post="Software Engineer" />
     <TailwindCard username="chandra" post="AI Engineer" />
    </>
  )
}

export default App
