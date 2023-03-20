import logo from './logo.svg';
import './App.css';
import { Route,Routes, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import PageNotFound from './PageNotFound';
function App() {
 const navigate =  useNavigate();
//  const navigateTo =(url) =>{
//    navigate (url)
//  }
  return (
    <>
    <Navbar/>
   <Routes>
    <Route path ='/' element ={<Home/>}/>

    <Route path ='/about' element ={<About/>}/>
    <Route path ='/contact' element ={<Contact/>}/>
    <Route path ='*' element ={<PageNotFound/>}/>
    
   </Routes>
   {/* <button onClick={()=>navigate('/about')}>About</button>
   <button onClick={()=>navigate('/contact')}>Contact</button>
   <button onClick={()=>navigate('/')}>Home</button> */}

   {/* <button onClick={()=> navigateTo('/about')} >About</button>
   <button onClick={()=> navigateTo('/contact')} >Contact</button> */}
   </>
  );
}

export default App;
