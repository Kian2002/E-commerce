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
import { Games } from "./types";
import { useQuery } from "react-query";
import Success from "./components/cart/Success";
import axios from "axios";

function App() {
  const location = useLocation();

  const { data, isLoading } = useQuery("games", async () => {
    const { data } = await axios.get(
      "https://ecom-backend.cyclic.app/api/rawg/games"
    );
    return data;
  });

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
      <header>
        <Navbar />
      </header>
      <main>
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
                  loading={isLoading}
                />
              }
            />
            <Route
              path="/store/item/:gameId"
              element={<Item games={games} setGames={setGames} />}
            />
            <Route path="/success" element={<Success />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </AnimatePresence>
      </main>
    </>
  );
}

export default App;
