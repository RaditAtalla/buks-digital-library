export default function formatDate(date) {
  const dateObj = new Date(date);
  const dateArray = dateObj.toUTCString().split(" ");
  return dateArray;
}