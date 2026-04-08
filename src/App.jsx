import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import HowWeWork from './pages/HowWeWork'
import Advisory from './pages/Advisory'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-we-work" element={<HowWeWork />} />
          <Route path="/advisory" element={<Advisory />} />
        </Route>
      </Routes>
    </>
  )
}
