const formatDate = (date) => {
  return Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).format(new Date(date));
};

const getGamesFromToday = (days = 7) => {
  // return today's date & date 7 days from today
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

  return dateStr.split(/\d{4}/g);
};

export { dateConverter, getGamesFromToday };
