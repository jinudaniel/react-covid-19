export const formatDate = dateString => {
  const dt = new Date(dateString);
  return `${(dt.getMonth() + 1).toString().padStart(2, "0")}/${dt
    .getDate()
    .toString()
    .padStart(2, "0")}/${dt
    .getFullYear()
    .toString()
    .padStart(4, "0")} ${dt
    .getHours()
    .toString()
    .padStart(2, "0")}:${dt
    .getMinutes()
    .toString()
    .padStart(2, "0")}:${dt
    .getSeconds()
    .toString()
    .padStart(2, "0")}`;
};

export const titleCase = title =>
  title
    .split(/ /g)
    .map(word => `${word.substring(0, 1).toUpperCase()}${word.substring(1)}`)
    .join(" ");
