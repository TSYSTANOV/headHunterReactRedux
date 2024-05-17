import { useDispatch, useSelector } from "react-redux";
import { SingleVacancy } from "./SingleVacancy";
import {
  fetchSearchVacancies,
  fetchVacancies,
  toggleSingleVacancy,
} from "../../redux/VacanciesSlice";
import { useEffect } from "react";
import { Loading } from "../Request/Loading";
import { Error } from "../Request/Error";
import { useFilterAndSort } from "../../Hooks/useFilterAndSort";

function VacanciesList() {
  const dispatch = useDispatch();
  const { mainRegion, typeRegion } = useSelector((state) => state.mainRegion);
  const searchValue = useSelector((state) => state.filterAndSort.searchValue);
  const { vacancies, loading } = useSelector((state) => state.vacanciesList);
  const filterAndSortVacancies = useFilterAndSort(vacancies);
  useEffect(() => {
    if (searchValue) {
      dispatch(fetchSearchVacancies(searchValue));
      return;
    }
    if (mainRegion && typeRegion) {
      dispatch(
        fetchVacancies({ mainRegion: mainRegion, typeRegion: typeRegion })
      );
    }
  }, [mainRegion, typeRegion, searchValue]);
  function resultListHandler(e) {
    if (!e.target.dataset.vacancy) return;
    dispatch(toggleSingleVacancy(e.target.dataset.vacancy));
  }
  return (
    <div className="wrapper__result result">
      {loading === "loading" ? (
        <Loading />
      ) : loading === "failed" ? (
        <Error />
      ) : (
        <ul className="result__list" onClick={resultListHandler}>
          {filterAndSortVacancies.length > 0 &&
            filterAndSortVacancies.map((item) => {
              return <SingleVacancy key={item.id} {...item} />;
            })}
        </ul>
      )}
    </div>
  );
}
export { VacanciesList };
