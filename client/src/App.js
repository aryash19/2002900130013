import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SingleTrain from "./pages/SingleTrain";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:trainId" element={<SingleTrain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;