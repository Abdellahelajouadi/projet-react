import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Layout from '../components/layout'
import Home from './Home'

const Markup = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  )

}

export default Markup
