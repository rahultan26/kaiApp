import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import HomePage component
import HomePage from "./components/HomePage";
// import PennyDrop component
import PennyDropPage from "./components/PennyDropPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/pennydrop" element={<PennyDropPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
