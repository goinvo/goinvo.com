import config from '../config.js'

export function imageUrl(path) {
  return `${config.cloudfrontUrl}${path}`
}

export function formatDate(date) {
  date = new Date(date);

  const day = date.toLocaleString("en-us", { day: "2-digit" });
  const month = date.toLocaleString("en-us", { month: "short" });
  const year = date.toLocaleString("en-us", { year: "2-digit" });

  return `${day}.${month}.${year}`;
}
