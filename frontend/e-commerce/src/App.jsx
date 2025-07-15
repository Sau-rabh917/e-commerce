
import Landing from './pages/landing'
import { Routes, Route } from 'react-router-dom'
import Contact from './pages/contact'
import Helpcentre from './pages/helpcentre'
import About from './pages/about'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="contact" element={<Contact />} />
        <Route path="helpcentre" element={<Helpcentre />} />
        <Route path="about" element={<About/>} />
      </Routes>
    </>
  )
}

export default App
