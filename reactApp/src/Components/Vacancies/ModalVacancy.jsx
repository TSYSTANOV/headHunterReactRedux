import { useDispatch, useSelector } from "react-redux";
import { toggleSingleVacancy } from "../../redux/VacanciesSlice";
import { useEffect, useState } from "react";

function ModalVacancy() {
  const dispatch = useDispatch();
  const { isOpen, id } = useSelector(
    (state) => state.vacanciesList.openSingleVacancy
  );
  const [SingleVacancy, setSingleVacancy] = useState({});
  function closeHandler() {
    dispatch(toggleSingleVacancy("reset"));
  }
  useEffect(() => {
    if (id) {
      // setSingleVacancy after fetch(id) to server on VacanciesSlice
    }
  }, [id]);
  return (
    <div
      className={`overlay overlay_vacancy ${isOpen ? "overlay_active" : ""}`}
    >
      <div className="modal">
        <button className="modal__close" onClick={closeHandler}>
          X
        </button>
        <h2 className="modal__title">data.title</h2>
        <p className="modal__compensation">data.compensation</p>
        <p className="modal__employer">data.employer</p>
        <p className="modal__address">data.address</p>
        <p className="modal__experience">
          Требуемый опыт работы: data.experience
        </p>
        <p className="modal__employment">data.employment</p>
        <p className="modal__description">data.description</p>
        <div className="modal__skills skills">
          <h2 className="skills__title">Подробнее:</h2>
          <ul className="skills__list">
            <li className="skills__item">skill one</li>
            <li className="skills__item">skill two</li>
            <li className="skills__item">skill three</li>
          </ul>
        </div>
        <button className="modal__response">Отправить резюме</button>
      </div>
    </div>
  );
}
export { ModalVacancy };
