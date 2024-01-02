import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ContactUs from './Pages/ContactUs'
import { BrowserRouter,Route, Routes} from 'react-router-dom'

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<HeroSection/>}></Route>
        <Route path='/contactUs' element={<ContactUs/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
