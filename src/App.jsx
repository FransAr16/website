import './App.css'
import '../node_modules/remixicon/fonts/remixicon.css'

// COMPONENTS
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Skills from './components/Skills/Skills'
import Project from './components/project/Project'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <Navbar />
      <div className="container">
        <Home />
        <Skills />
        <Project />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
