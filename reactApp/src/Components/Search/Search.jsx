import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setState } from "../../redux/FilterAndSort";

function Search() {
  const dispatch = useDispatch();
  const { searchValue } = useSelector((state) => state.filterAndSort);
  const [searchString, setSearchString] = useState("");
  function handleSearch(e) {
    e.preventDefault();
    dispatch(setState({ type: "searchValue", value: searchString }));
  }
  useEffect(() => {
    if (searchString.length === 0) {
      dispatch(setState({ type: "searchValue", value: searchString }));
    }
  }, [searchString]);
  useEffect(() => {
    setSearchString(searchValue);
  }, [searchValue]);
  return (
    <form className="bottom__search" onSubmit={handleSearch}>
      <div className="bottom__search-wrapper">
        <input
          className="bottom__input"
          type="search"
          name="search"
          value={searchString}
          onChange={(e) => {
            setSearchString(e.target.value);
          }}
        />
        <button className="bottom__advanced-options" type="button"></button>
      </div>
      <button className="bottom__btn" type="submit">
        Найти
      </button>
    </form>
  );
}
export { Search };
