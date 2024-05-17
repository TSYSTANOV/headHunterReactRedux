import { useSelector } from "react-redux";

function SearchResults() {
  const searchValue = useSelector((state) => state.filterAndSort.searchValue);
  const vacancies = useSelector((state) => state.vacanciesList.vacancies);

  if (searchValue) {
    return (
      <h1 className="found">
        <p>
          {vacancies.length > 0
            ? `${vacancies.length} вакансий по запросу: `
            : "Ничего не найдено по запросу"}
        </p>
        "<span className="found__item">{searchValue}</span>"
      </h1>
    );
  }
}
export { SearchResults };
