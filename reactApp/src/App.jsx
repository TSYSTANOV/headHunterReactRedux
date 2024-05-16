import "./App.css";
import React from "react";
import { Header } from "./Components/Header/Header";
import { SearchParams } from "./Components/SearchParams/SearchParams";
import { BrowserRouter } from "react-router-dom";
import { SortOptions } from "./Components/SortOptions/SortOptions";
import { FilterOptions } from "./Components/FilterOptios/FilterOptions";
import { VacanciesList } from "./Components/Vacancies/VacanciesList";
import { ModalVacancy } from "./Components/Vacancies/ModalVacancy";
function App() {
  return (
    <BrowserRouter>
      <SearchParams>
        <Header />
        <main>
          <div className="container">
            <SortOptions />
            <div className="wrapper">
              <FilterOptions />
              <VacanciesList />
            </div>
          </div>
        </main>
        <ModalVacancy />
      </SearchParams>
    </BrowserRouter>
  );
}

export default App;
