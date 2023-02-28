import "./App.css";
import Login from "./Component/Login";
import Register from "./Component/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Component/Header";
import Userdata from "./Component/Userdata";
import Home from "./Component/Home";
function App() {
  return (
    <>
      <Header/> 
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/Sign Up" element={<Register />} />
        <Route path="/Userdata" element={<Userdata />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
