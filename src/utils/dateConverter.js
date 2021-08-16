const dateConverter = (gameDay) => {
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
  let dateStr = day + " " + date + " " + year + " " + time;
  dateStr = dateStr.replaceAll(/\s\s/g, " ");
  return dateStr.split(/\d{4}/g);
};

export { dateConverter };
