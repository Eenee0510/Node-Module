var date = new Date();

console.log(date.getDay());
let days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thurday",
  "Friday",
  "Saturday",
  "Sunday",
];
let today = days[date.getDay() - 1];
console.log("Today is:" + today);

let pm = "";
if (date.getHours() >= 12) {
  pm = "pm";
} else {
  pm = "am";
}
console.log(
  "Current time is:" +
    date.getHours() +
    "" +
    pm +
    ":" +
    date.getMinutes() +
    ":" +
    date.getSeconds()
);
