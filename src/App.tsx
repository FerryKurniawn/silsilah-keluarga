import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import KeluargaSisko from "./keluargasisko";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sisko" element={<KeluargaSisko />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
