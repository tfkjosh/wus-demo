import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Home } from './pages/Home'
import { Shop } from './pages/Shop'
import { TermsInfo } from './pages/TermsInfo'
import { Contact } from './pages/Contact'
import { Navbar } from './components/Navbar'
import { ShoppingCartProvider } from './context/ShoppingCartContext'



function App() {
  return (
      <ShoppingCartProvider>
          <Navbar/>
          <Container className='mb-4'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop/>} />
            <Route path="/termsinfo" element={<TermsInfo />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          </Container>
      </ShoppingCartProvider>       
  )
}

export default App
