import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/home";
import Nostros from "./pages/Nostros/Nostros";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nostros />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
