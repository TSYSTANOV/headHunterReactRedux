import { useDispatch, useSelector } from "react-redux";
import { toggleSingleVacancy } from "../../redux/VacanciesSlice";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../Utils/api";

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
      fetch(`${BASE_URL}/${id}`)
        .then((res) => res.json())
        .then((vacancy) => setSingleVacancy(vacancy));
    }
  }, [id]);
  return (
    <div
      className={`overlay overlay_vacancy ${isOpen ? "overlay_active" : ""}`}
    >
      {SingleVacancy.id && (
        <div className="modal">
          <button className="modal__close" onClick={closeHandler}>
            X
          </button>
          <h2 className="modal__title">{SingleVacancy.title}</h2>
          <p className="modal__compensation">{SingleVacancy.compensation}</p>
          <p className="modal__employer">{SingleVacancy.employer}</p>
          <p className="modal__address">{SingleVacancy.address}</p>
          <p className="modal__experience">
            Требуемый опыт работы: {SingleVacancy.experience}
          </p>
          {SingleVacancy.employment.map((el) => {
            return (
              <p key={el} className="modal__employment">
                {el}
              </p>
            );
          })}

          <p className="modal__description">{SingleVacancy.description}</p>
          <div className="modal__skills skills">
            <h2 className="skills__title">Подробнее:</h2>
            <ul className="skills__list">
              {SingleVacancy.skills.map((skill) => {
                return (
                  <li key={skill} className="skills__item">
                    {skill}
                  </li>
                );
              })}
            </ul>
          </div>
          <button className="modal__response">Отправить резюме</button>
        </div>
      )}
    </div>
  );
}
export { ModalVacancy };
