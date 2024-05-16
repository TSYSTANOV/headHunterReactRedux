import { useDispatch, useSelector } from "react-redux";
import { resetFilters, setState } from "../../redux/FilterAndSort";

function FilterOptions() {
  const dispatch = useDispatch();
  const { salary, experience, employment } = useSelector(
    (state) => state.filterAndSort
  );

  function formHandler(e) {
    dispatch(setState({ type: e.target.name, value: e.target.value }));
  }
  function resetFiltersOnPage(e) {
    e.preventDefault();
    dispatch(resetFilters());
  }

  return (
    <div className="wrapper__filter filter">
      <form className="filter__form" onChange={formHandler}>
        <fieldset className="filter__box">
          <legend className="filter__title">Уровень дохода</legend>
          <label className="filter__field filter__field_radio">
            <input
              className="filter__input filter__input_radio"
              type="radio"
              name="salary"
              value="30000"
              checked={salary === "30000" ? true : false}
              readOnly
            />
            <span className="filter__text">от 30 000 руб.</span>
          </label>
          <label className="filter__field filter__field_radio">
            <input
              className="filter__input filter__input_radio"
              type="radio"
              name="salary"
              value="50000"
              checked={salary === "50000" ? true : false}
              readOnly
            />
            <span className="filter__text">от 50 000 руб.</span>
          </label>
          <label className="filter__field filter__field_radio">
            <input
              className="filter__input filter__input_radio"
              type="radio"
              name="salary"
              value="80000"
              checked={salary === "80000" ? true : false}
              readOnly
            />
            <span className="filter__text">от 80 000 руб.</span>
          </label>
          <label className="filter__field filter__field_radio">
            <input
              className="filter__input filter__input_radio"
              type="radio"
              name="salary"
              value="120000"
              checked={salary === "120000" ? true : false}
              readOnly
            />
            <span className="filter__text">от 120 000 руб.</span>
          </label>
        </fieldset>

        <fieldset className="filter__box">
          <legend className="filter__title">Опыт работы</legend>
          <label className="filter__field filter__field_radio">
            <input
              className="filter__input filter__input_radio"
              type="radio"
              name="experience"
              value="Нет опыта"
              checked={experience === "Нет опыта" ? true : false}
              readOnly
            />
            <span className="filter__text">Нет опыта</span>
          </label>
          <label className="filter__field filter__field_radio">
            <input
              className="filter__input filter__input_radio"
              type="radio"
              name="experience"
              value="от 1 года до 3 лет"
              checked={experience === "от 1 года до 3 лет" ? true : false}
              readOnly
            />
            <span className="filter__text">от 1 года до 3 лет</span>
          </label>
          <label className="filter__field filter__field_radio">
            <input
              className="filter__input filter__input_radio"
              type="radio"
              name="experience"
              value="от 3 до 6 лет"
              checked={experience === "от 3 до 6 лет" ? true : false}
              readOnly
            />
            <span className="filter__text">от 3 до 6 лет</span>
          </label>
          <label className="filter__field filter__field_radio">
            <input
              className="filter__input filter__input_radio"
              type="radio"
              name="experience"
              value="более 6 лет"
              checked={experience === "более 6 лет" ? true : false}
              readOnly
            />
            <span className="filter__text">более 6 лет</span>
          </label>
        </fieldset>

        <fieldset className="filter__box">
          <legend className="filter__title">График работы</legend>
          <label className="filter__field filter__field_checkbox">
            <input
              className="filter__input filter__input_checkbox"
              type="checkbox"
              name="employment"
              value="удаленная работа"
              checked={employment.includes("удаленная работа") ? true : false}
              readOnly
            />
            <span className="filter__text">Удаленная работа</span>
          </label>
          <label className="filter__field filter__field_checkbox">
            <input
              className="filter__input filter__input_checkbox"
              type="checkbox"
              name="employment"
              value="полная занятость"
              checked={employment.includes("полная занятость") ? true : false}
              readOnly
            />
            <span className="filter__text">Полная занятость</span>
          </label>
          <label className="filter__field filter__field_checkbox">
            <input
              className="filter__input filter__input_checkbox"
              type="checkbox"
              name="employment"
              value="гибкий график"
              checked={employment.includes("гибкий график") ? true : false}
              readOnly
            />
            <span className="filter__text">Гибкий график</span>
          </label>
        </fieldset>
        <div className="filter__mobile">
          <button className="filter__reset" onClick={resetFiltersOnPage}>
            Сбросить все
          </button>
          <button className="filter__apply">Применить фильтры</button>
        </div>
      </form>
    </div>
  );
}
export { FilterOptions };
{
  /* <fieldset className="filter__box">
          <legend className="filter__title">Регион</legend>
          <label className="filter__field filter__field_checkbox">
            <input
              className="filter__input filter__input_checkbox"
              type="checkbox"
              name="region"
              value="Москва"
            />
            <span className="filter__text">Москва</span>
          </label>
          <label className="filter__field filter__field_checkbox">
            <input
              className="filter__input filter__input_checkbox"
              type="checkbox"
              name="region"
              value="Челябинск"
            />
            <span className="filter__text">Челябинск</span>
          </label>
          <label className="filter__field filter__field_checkbox">
            <input
              className="filter__input filter__input_checkbox"
              type="checkbox"
              name="region"
              value="Калининград"
            />
            <span className="filter__text">Калининград</span>
          </label>
          <label className="filter__field filter__field_checkbox">
            <input
              className="filter__input filter__input_checkbox"
              type="checkbox"
              name="region"
              value="Новосибирск"
            />
            <span className="filter__text">Новосибирск</span>
          </label>
          <label className="filter__field filter__field_checkbox">
            <input
              className="filter__input filter__input_checkbox"
              type="checkbox"
              name="region"
              value="Екатеринбург"
            />
            <span className="filter__text">Екатеринбург</span>
          </label>
          <label className="filter__field filter__field_checkbox">
            <input
              className="filter__input filter__input_checkbox"
              type="checkbox"
              name="region"
              value="Владивосток"
            />
            <span className="filter__text">Владивосток</span>
          </label>
          <label className="filter__field filter__field_checkbox">
            <input
              className="filter__input filter__input_checkbox"
              type="checkbox"
              name="region"
              value="Санкт-Петербург"
            />
            <span className="filter__text">Санкт-Петербург</span>
          </label>
        </fieldset> */
}
