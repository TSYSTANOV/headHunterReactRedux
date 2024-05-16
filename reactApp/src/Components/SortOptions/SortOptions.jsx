import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setState } from "../../redux/FilterAndSort";
const dateArr = {
  1: { text: "За сутки" },
  3: { text: "За три дня" },
  7: { text: "За неделю" },
  30: { text: "За месяц" },
  365: { text: "За все время" },
};
const orderArr = {
  date: { text: "По дате" },
  up: { text: "По убиванию зарплат" },
  down: { text: "По возростанию зарплат" },
};
function SortOptions() {
  const { period, order } = useSelector((state) => state.filterAndSort);
  const dispatch = useDispatch();
  const [orderSort, setOrderSort] = useState({
    isOpen: false,
  });

  const [periodSort, setPeriodSort] = useState({
    isOpen: false,
  });
  function handlerClick(e) {
    if (e.target.parentNode.classList.contains("option__list_period")) {
      dispatch(setState({ type: "period", value: e.target.dataset.date }));
      setPeriodSort({
        isOpen: false,
      });
    }
    if (e.target.parentNode.classList.contains("option__list_order")) {
      dispatch(setState({ type: "order", value: e.target.dataset.sort }));
      setOrderSort({
        isOpen: false,
      });
    }
  }
  return (
    <div className="option" onClick={handlerClick}>
      <div className="option__field option__field_order">
        <button
          className="option__btn option__btn_order"
          onClick={() => {
            setOrderSort({ isOpen: !orderSort.isOpen });
            setPeriodSort({ isOpen: false });
          }}
        >
          {orderArr[order].text}
        </button>
        <input type="hidden" id="order_by" name="order_by" value={order} />

        <ul
          className={`option__list option__list_order ${
            orderSort.isOpen ? "option__list_active" : ""
          }`}
        >
          {Object.keys(orderArr).map((item) => {
            return (
              <li
                key={item}
                className="option__item option__item_active"
                tabIndex="1"
                data-sort={item}
              >
                {orderArr[item].text}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="option__field option__field_period">
        <button
          className="option__btn option__btn_period"
          onClick={() => {
            setPeriodSort({ isOpen: !periodSort.isOpen });
            setOrderSort({ isOpen: false });
          }}
        >
          {dateArr[period].text}
        </button>
        <input
          type="hidden"
          id="search_period"
          name="search_period"
          value={period}
        />

        <ul
          className={`option__list option__list_period ${
            periodSort.isOpen ? "option__list_active" : ""
          }`}
        >
          {Object.keys(dateArr).map((item) => {
            return (
              <li
                key={item}
                className="option__item option__item_active"
                data-date={item}
              >
                {dateArr[item].text}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export { SortOptions };
