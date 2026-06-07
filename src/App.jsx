import Home from "./pages/Home";
import '../src/style/global.css';
import Navbar from "./components/Navbar";
import { Routes, Route } from 'react-router-dom';
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
