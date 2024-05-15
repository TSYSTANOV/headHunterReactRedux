import { useState } from "react";

function SortOptions() {
  const [orderSort, setOrderSort] = useState({
    isOpen: false,
    activeText: "По дате",
    activeParam: "date",
  });
  const [periodSort, setPeriodSort] = useState({
    isOpen: false,
    activeText: "За все время",
    activeParam: "365",
  });
  function handlerClick(e) {
    if (e.target.parentNode.classList.contains("option__list_period")) {
      console.log("period");
    }
    if (e.target.parentNode.classList.contains("option__list_order")) {
      console.log("order");
    }
  }
  return (
    <div className="option" onClick={handlerClick}>
      <div className="option__field option__field_order">
        <button
          className="option__btn option__btn_order"
          onClick={() => {
            setOrderSort({ ...orderSort, isOpen: !orderSort.isOpen });
          }}
        >
          {orderSort.activeText}
        </button>
        <input
          type="hidden"
          id="order_by"
          name="order_by"
          value={orderSort.activeParam}
        />

        <ul
          className={`option__list option__list_order ${
            orderSort.isOpen ? "option__list_active" : ""
          }`}
        >
          <li
            className="option__item option__item_active"
            tabIndex="1"
            data-sort="date"
          >
            По дате
          </li>
          <li className="option__item" tabIndex="1" data-sort="up">
            По убыванию зарплат
          </li>
          <li className="option__item" tabIndex="1" data-sort="down">
            По возрастанию зарплат
          </li>
        </ul>
      </div>

      <div className="option__field option__field_period">
        <button
          className="option__btn option__btn_period"
          onClick={() => {
            setPeriodSort({ ...periodSort, isOpen: !periodSort.isOpen });
          }}
        >
          {periodSort.activeText}
        </button>
        <input
          type="hidden"
          id="search_period"
          name="search_period"
          value={periodSort.activeParam}
        />

        <ul
          className={`option__list option__list_period ${
            periodSort.isOpen ? "option__list_active" : ""
          }`}
        >
          <li className="option__item option__item_active" data-date="365">
            За всё время
          </li>
          <li className="option__item" tabIndex="1" data-date="30">
            За месяц
          </li>
          <li className="option__item" tabIndex="1" data-date="7">
            За неделю
          </li>
          <li className="option__item" tabIndex="1" data-date="3">
            За три дня
          </li>
          <li className="option__item" tabIndex="1" data-date="1">
            За сутки
          </li>
        </ul>
      </div>
    </div>
  );
}
export { SortOptions };
