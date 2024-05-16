function SingleVacancy() {
  return (
    <li className="result__item">
      <article className="vacancy">
        <h2 className="vacancy__title">
          <a className="vacancy__open-modal" href="#" data-vacancy="3515">
            Junior Frontend разработчик
          </a>
        </h2>
        <p className="vacancy__compensation">
          120&nbsp;000 – 150&nbsp;000 руб.
        </p>
        <p className="vacancy__work-schedule">Можно работать из дома</p>
        <div className="vacancy__employer">
          <p className="vacancy__employer-title">HFLabs</p>
          <p className="vacancy__employer-address">Москва</p>
        </div>
        <p className="vacancy__description">
          Ожидаем, решения задач связанных с визуальными изменениями на сайтах
          сервисов, к таковым задачам относится, как верстка ...
        </p>
        <p className="vacancy__date">
          <time dateTime="2022-02-25">25.02.2022</time>
        </p>
        <div className="vacancy__wrapper-btn">
          <a
            className="vacancy__response vacancy__open-modal"
            href="#"
            data-vacancy="3515"
          >
            Откликнуться
          </a>
          <button className="vacancy__contacts">Показать контакты</button>
        </div>
      </article>
    </li>
  );
}
export { SingleVacancy };
