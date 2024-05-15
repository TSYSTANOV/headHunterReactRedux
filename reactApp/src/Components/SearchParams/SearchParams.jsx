import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import queryString from "query-string";
import { setMainRegion } from "../../redux/CityChooseSlice";
function SearchParams({ children }) {
  const dispatch = useDispatch();
  const [searhParams, setSearchParams] = useSearchParams();
  const { mainRegion, typeRegion } = useSelector((state) => state.mainRegion);
  const params = queryString.parse(location.search);
  useEffect(() => {
    if (!searhParams.has("city") && !searhParams.has("country")) {
      dispatch(setMainRegion({ name: "Украина", type: "country" }));
    }
    Object.keys(params).forEach((key) => {
      if (key === "country" || key === "city") {
        dispatch(setMainRegion({ name: params[key], type: key }));
      }
    });
  }, []);
  useEffect(() => {
    if (mainRegion) {
      setSearchParams({ [typeRegion]: mainRegion });
    }
  }, [mainRegion]);
  return <>{children}</>;
}
export { SearchParams };
