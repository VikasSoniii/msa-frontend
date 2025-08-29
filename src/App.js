import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import OrdersList from "./pages/OrdersList"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orders" element={<OrdersList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
