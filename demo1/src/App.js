import "./App.css";
// import { Footer } from "./component/Footer";
import { Navbar } from "./component/navbar";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import Details from "./component/Details";

function App() {
  return (
    <>
    
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/Signup" element={<Signup />} />
      </Routes>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Routes>
        <Route path="/details" element={<Details/>} />
      </Routes>
      {/* <Footer/> */}
    </>
  );
}

export default App;
