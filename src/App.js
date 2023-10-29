import './App.css';
import Header from './components/header/Header';
import { Route, Routes } from "react-router";
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Service from './pages/service/Service';
import Footer from './components/footer/Footer';
import Portfolio from './pages/portfolio/Portfolio';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/service' element={<Service />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
