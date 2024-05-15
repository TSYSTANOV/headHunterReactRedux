import "./App.css";
import React from "react";
import { Header } from "./Components/Header/Header";
import { SearchParams } from "./Components/SearchParams/SearchParams";
import { BrowserRouter } from "react-router-dom";
import { SortOptions } from "./Components/SortOptions/SortOptions";
function App() {
  return (
    <BrowserRouter>
      <SearchParams>
        <Header />
        <main>
          <div className="container">
            <SortOptions />
          </div>
        </main>
      </SearchParams>
    </BrowserRouter>
  );
}

export default App;
