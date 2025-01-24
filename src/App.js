
import './App.css';
import {Routes, Route} from "react-router-dom"
import Header from './components/Header';
import Footer from "./components/Footer.jsx";
import DisplayBlog from './components/DisplayBlog.jsx';
import Navbar from './components/Navbar.jsx';
import DisplayBlogList from './components/DisplayBlogList.jsx';

function App() {
  return (
   <>
   <Header/>
   <Navbar/>
   <Routes>
    <Route path = "/" element = {<DisplayBlogList/>} />
    <Route path = "/Accounts" element = {<DisplayBlogList/>} />
    <Route path = "/Politics" element = {<DisplayBlogList/>} />
    <Route path = "/Central Govt." element = {<DisplayBlogList/>} />
    <Route path = "/sports" element = {<DisplayBlogList/>} />
    <Route path="*" element={<DisplayBlog />} />
   </Routes>
   <Footer/>
   </>
  );
}

export default App;
