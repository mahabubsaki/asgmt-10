import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/pages/About';
import Blogs from './components/pages/Blogs';
import Home from './components/pages/Home';
import Notfound from './components/pages/Notfound';
import Footer from './components/shared/Footer';
import Header from './components/shared/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="*" element={<Notfound></Notfound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
