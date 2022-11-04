import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StartPage, GamePage } from "./pages";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:route" element={<GamePage />} />
        <Route path="/" element={<StartPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
