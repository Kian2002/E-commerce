import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Store from "./pages/Store";
import Item from "./pages/Item";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/navbar/Navbar";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="store" element={<Store />} />
          <Route path="store/item/:itemId" element={<Item />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
