const formatDate = (
  date,
  obj = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }
) => {
  return Intl.DateTimeFormat("en", obj).format(new Date(date));
};

// return today's games & games x days from today
const getDatesFromToday = (days = 7) => {
  const today = new Date();
  const endDate = new Date();
  endDate.setDate(today.getDate() + days);

  return [today, endDate].map((date) => formatDate(date));
};

// returns an array of readable time, and readable date from API date format
const dateConverter = (gameDay) => {
  // returns date with short weekday, month, and 12-hour time basis
  const newDate = Intl.DateTimeFormat("en", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  }).format(new Date(gameDay));

  const [day, date, year, time] = newDate.split(",");
  let dateStr = day + date + year + time + "";

  // splits formatted date and time into an array of ["Fri Dec 31", "7:00"]
  return dateStr.split(/\d{4}/g);
};

export { dateConverter, getDatesFromToday, formatDate };
