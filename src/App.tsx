import React, {useContext} from 'react';
import Header from "./components/layouts/header";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import Footer from "./components/layouts/footer";
import NotFound from "./pages/not-found";
import UserProfile from "./pages/user-profile";
import {ThemeContext} from "./contexts/theme.context";

function App() {
  const {theme} = useContext(ThemeContext);
  return (
    <div
      data-theme={theme === 'dark' ? 'dark' : 'light'}
      className="flex flex-col justify-between min-h-screen">
      <Header/>

      <main className="mb-8">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/user/:username" element={<UserProfile/>}/>
          <Route path="/notfound" element={<NotFound/>}/>
        </Routes>
      </main>

      <Footer/>
    </div>
  );
}

export default App;
