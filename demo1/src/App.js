import "./App.css";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import Details from "./component/details";
import 'react-tooltip/dist/react-tooltip.css'

function App() {
  return (
    <>
    
      <Navbar />
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/details" element={<Details/>} />
      </Routes>
    <Footer/>
    </>
  );
}

export default App;
