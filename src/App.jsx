import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage, LandingPage, DetailPage, CreatePage } from './views'
import { Footer, NavBar } from './components'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <NavBar />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/home' exact element={<HomePage />} />
          <Route path='/pokemon/:id' exact element={<DetailPage />} />
          <Route path='/pokemonCreate' element={<CreatePage />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  )
}

export default App
