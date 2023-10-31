import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/header"
import Index from "./components/index"
import NotFound from "./components/404"
import About from "./components/about"
import Contact from "./components/contact"
import Menu from "./components/menu"
import Reserve from "./components/reserve"
import Access from "./components/access"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Index/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/reserve" element={<Reserve/>} />
        <Route path="/access" element={<Access/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
