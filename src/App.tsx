import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Store from "./pages/Store";
import Item from "./pages/Item";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/navbar/Navbar";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import getData, { Games } from "./data";

function App() {
  const location = useLocation();

  const initalState: Games[] = [];
  const [games, setGames] = useState(initalState);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setGames(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route
            path="/store"
            element={<Store games={games} setGames={setGames} />}
          />
          <Route path="/store/item/:itemId" element={<Item />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
