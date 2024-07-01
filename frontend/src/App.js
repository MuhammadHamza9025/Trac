import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Courses from './Pages/Courses';
import Footer from './Components/Footer';
import Pricing from './Pages/Pricing';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/course/:id' element={<Pricing></Pricing>}></Route>
          <Route path='/' element={<Courses></Courses>}></Route>
          {/* <Route path='/course/:id' element={<Courses></Courses>}></Route> */}
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
