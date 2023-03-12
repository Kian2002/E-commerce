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
import { useQuery } from "react-query";
import Success from "./components/cart/Success";

function App() {
  const location = useLocation();
  const { data, isLoading } = useQuery("games", getData);
  const [games, setGames] = useState<Games[]>([]);
  const [tempGames, setTempGames] = useState<Games[]>([]);

  useEffect(() => {
    if (data) {
      setGames(data);
      setTempGames(data);
    }
  }, [isLoading]);

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="E-commerce" element={<Home />} />
          <Route
            path="E-commerce/store"
            element={
              <Store
                games={games}
                setGames={setGames}
                tempGames={tempGames}
                loading={isLoading}
              />
            }
          />
          <Route
            path="E-commerce/store/item/:gameId"
            element={<Item games={games} setGames={setGames} />}
          />
          <Route path="E-commerce/success" element={<Success />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
