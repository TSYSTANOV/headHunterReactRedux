import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import queryString from "query-string";
import { setMainRegion } from "../../redux/CityChooseSlice";
import { setState } from "../../redux/FilterAndSort";
function SearchParams({ children }) {
  const dispatch = useDispatch();
  const [searhParams, setSearchParams] = useSearchParams();
  const { mainRegion, typeRegion } = useSelector((state) => state.mainRegion);
  const FilterAndSort = useSelector((state) => state.filterAndSort);
  const activeFilterAndSortParams = Object.keys(FilterAndSort).reduce(
    (acc, item) => {
      if (FilterAndSort[item].length > 0) {
        if (Array.isArray(FilterAndSort[item])) {
          acc[item] = JSON.stringify([...FilterAndSort[item]]);
        } else {
          acc[item] = FilterAndSort[item];
        }
      }
      return acc;
    },
    {}
  );

  const params = queryString.parse(location.search);
  useEffect(() => {
    if (!searhParams.has("city") && !searhParams.has("country")) {
      dispatch(setMainRegion({ name: "Украина", type: "country" }));
    }

    Object.keys(params).forEach((key) => {
      if (key === "country" || key === "city") {
        dispatch(setMainRegion({ name: params[key], type: key }));
        return;
      }

      if (key in FilterAndSort) {
        if (key === "employment") {
          dispatch(
            setState({ type: "employment", value: JSON.parse(params[key]) })
          );
          return;
        }
        dispatch(setState({ type: key, value: params[key] }));
        return;
      }
    });
  }, []);
  useEffect(() => {
    if (mainRegion) {
      setSearchParams({
        [typeRegion]: mainRegion,
        ...activeFilterAndSortParams,
      });
    }
  }, [mainRegion, FilterAndSort]);

  return <>{children}</>;
}
export { SearchParams };
