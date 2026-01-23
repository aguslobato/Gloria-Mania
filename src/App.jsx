import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'

function App() {

  return (
    <>
      <div className="home">
        <Navbar/>
        <Home/>
      </div>
    </>
  )

}

export default App
