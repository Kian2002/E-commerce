import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Store from "./pages/Store";
import Item from "./pages/Item";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/navbar/Navbar";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import getData, { Games } from "./data";

function App() {
  const location = useLocation();

  const initalState: Games[] = [];
  const [games, setGames] = useState(initalState);
  const [tempGames, setTempGames] = useState(initalState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setGames(data);
      setTempGames(data);
      setLoading(false);
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
            element={
              <Store
                games={games}
                setGames={setGames}
                tempGames={tempGames}
                loading={loading}
              />
            }
          />
          <Route path="/store/item/:itemId" element={<Item games={games} />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
