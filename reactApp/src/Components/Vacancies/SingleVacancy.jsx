function SingleVacancy({
  title,
  id,
  workSchedule,
  employer,
  date,
  compensation,
  description,
  address,
}) {
  return (
    <li className="result__item">
      <article className="vacancy">
        <h2 className="vacancy__title">
          <a className="vacancy__open-modal" href="#" data-vacancy={id}>
            {title}
          </a>
        </h2>
        <p className="vacancy__compensation">{compensation}</p>
        <p className="vacancy__work-schedule">{workSchedule}</p>
        <div className="vacancy__employer">
          <p className="vacancy__employer-title">{employer}</p>
          <p className="vacancy__employer-address">{address}</p>
        </div>
        <p className="vacancy__description">{description}</p>
        <p className="vacancy__date">
          <time dateTime="2022-02-25">{date}</time>
        </p>
        <div className="vacancy__wrapper-btn">
          <a
            className="vacancy__response vacancy__open-modal"
            href="#"
            data-vacancy={id}
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
