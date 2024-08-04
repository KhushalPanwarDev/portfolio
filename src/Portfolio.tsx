import Hero from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar/Navbar"
import './Portfolio.scss'
const App = () => {
  const baseClass = 'portfolio-container'
  return (
    <div className={baseClass}>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <div >
        <Navbar/>
        <Hero/>
      </div>
      hello
    </div>
  )
}

export default App
