import { createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import useServices from './components/hooks/useServices';
import About from './components/pages/About';
import Blogs from './components/pages/Blogs';
import Checkout from './components/pages/Checkout';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Notfound from './components/pages/Notfound';
import Register from './components/pages/Register';
import Footer from './components/shared/Footer';
import Header from './components/shared/Header';
import RequireAuth from './components/utilities/RequireAuth';
export const ServicesContext = createContext()

function App() {
  const services = useServices()
  return (
    <ServicesContext.Provider value={{ services }}>
      <div className="App">
        <ToastContainer></ToastContainer>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/blogs" element={<Blogs></Blogs>}></Route>
          <Route path="/checkout/:id" element={<RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>}></Route>
          <Route path="*" element={<Notfound></Notfound>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </ServicesContext.Provider>
  );
}

export default App;
