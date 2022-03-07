import moment from "moment";

const convertToSimpleFormat = (date) => {
  return moment(date).format("YYYY-MM-DD");
};

const convertToISOFormat = (date) => {
  return new Date(date).toISOString();
};

const diffBetweenDates = (arrive, checkout) => {
  const date1 = new Date(arrive);
  const date2 = new Date(checkout);
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};

const increaseDays = (date, days) => {
  let result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

const decreaseDays = (date, days) => {
  let result = new Date(date);
  result.setDate(result.getDate() - days);
  return result;
};

export default {
  convertToSimpleFormat,
  convertToISOFormat,
  diffBetweenDates,
  increaseDays,
  decreaseDays
};
