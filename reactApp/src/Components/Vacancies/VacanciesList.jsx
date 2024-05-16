import { useDispatch } from "react-redux";
import { SingleVacancy } from "./SingleVacancy";
import { toggleSingleVacancy } from "../../redux/VacanciesSlice";

function VacanciesList() {
  const dispatch = useDispatch();
  function resultListHandler(e) {
    if (!e.target.dataset.vacancy) return;
    dispatch(toggleSingleVacancy(e.target.dataset.vacancy));
  }
  return (
    <div className="wrapper__result result">
      <ul className="result__list" onClick={resultListHandler}>
        <SingleVacancy />
      </ul>
    </div>
  );
}
export { VacanciesList };
