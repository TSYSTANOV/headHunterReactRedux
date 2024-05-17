import { useSelector } from "react-redux";

function checkPeriodHandler(date, period) {
  const dateVacancy = new Date(date);
  const dayByPeriod = new Date(
    new Date().setDate(new Date().getDate() - period)
  );
  return dateVacancy > dayByPeriod;
}

function useFilterAndSort(vacancies) {
  const { period, order, salary, experience, employment } = useSelector(
    (state) => state.filterAndSort
  );
  const filteredAndSortData = vacancies
    .filter((vacancy) => {
      const salaryCheck = salary
        ? vacancy.minCompensation >= salary
          ? true
          : false
        : true;
      const experienceCheck = experience
        ? vacancy.experience === experience
          ? true
          : false
        : true;
      const periodCheck = checkPeriodHandler(vacancy.date, period);
      const employmentCheck =
        employment.length > 0
          ? vacancy.employment.reduce((acc, el) => {
              if (employment.includes(el)) {
                acc = true;
              }
              return acc;
            }, false)
          : true;

      return salaryCheck && experienceCheck && employmentCheck && periodCheck;
    })
    .sort((a, b) => {
      switch (order) {
        case "date":
          return new Date(a.date) > new Date(b.date) ? -1 : 1;
        case "up":
          return a.minCompensation > b.minCompensation ? -1 : 1;
        case "down":
          return a.minCompensation > b.minCompensation ? 1 : -1;
      }
    });
  return filteredAndSortData;
}
export { useFilterAndSort };
