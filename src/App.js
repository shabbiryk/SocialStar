import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Sidebar from "./Sidebar"
import Feed from "./Components/Feed"
import Footer from './Components/Footer';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Search from './Components/Search';
import Profile from './Components/Profile';
import SearchFeat from './Components/Searched';


function App() {
  return (
    <div >

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<Login />} />
          <Route path="/searched" element={<SearchFeat />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
