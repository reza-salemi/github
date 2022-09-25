import React from 'react';
import Header from "./components/header";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import Footer from "./components/footer";
import NotFound from "./pages/not-found";
import Profile from "./pages/profile";

function App() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/*" element={<NotFound/>}/>
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
