import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./Home/Home";
import MovieList from "./components/MovieList/MovieList";
import MovieDetails from "./Movie Details/MovieDetails";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="movie/:id" element={<MovieDetails />}></Route>
          <Route path="movies/:type" element={<MovieList />}></Route>
          <Route path="/*" element={<h1>Error Page</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
