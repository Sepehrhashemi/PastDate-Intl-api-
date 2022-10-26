const element = document.querySelector("span.result");
console.log(element);
/* Persian Number Format */
const perNum = new Intl.NumberFormat("fa");

console.log(perNum.format(1234567));

/* const options = {
    weekday: 'narrow' | 'short' | 'long',
    era: 'narrow' | 'short' | 'long',
    year: 'numeric' | '2-digit',
    month: 'numeric' | '2-digit' | 'narrow' | 'short' | 'long',
    day: 'numeric' | '2-digit',
    hour: 'numeric' | '2-digit',
    minute: 'numeric' | '2-digit',
    second: 'numeric' | '2-digit'
}; */
const options = {
  weekday: "short",
  // era: 'narrow',
  year: "2-digit",
  month: "2-digit",
  day: "2-digit",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
};
const date = new Date();
const perDate = new Intl.DateTimeFormat("fa", options).format(date);
console.log(perDate);

const date2 = new Date(Date.UTC(2020, 1, 20, 3, 0, 0, 200));
const faDate = new Intl.DateTimeFormat("fa", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
}).format(date2);
console.log(faDate);

// element.textContent = faDate;
console.log(navigator.language);

/* Start */
const countDateMs = new Date(2022, 08, 26, 16, 28, 00, 00);
// const countDateMs = new Date(2022, 09, 25, 11, 00, 00, 00);
const nowMs = new Date();
// const gap = nowMs - countDateMs;
const gap = countDateMs.getTime() - nowMs.getTime();
console.log("🚀 ~ file: app.js ~ line 49 ~ gap", gap);

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
const month = day * 30;
console.log(countDateMs.getFullYear());
console.log(Math.floor(Math.abs(gap) / 31536000000));
// const gapYear = countDateMs.getFullYear() - nowMs.getFullYear();
const gapYear = Math.floor(Math.abs(gap) / 31536000000);
console.log("🚀 ~ file: app.js ~ line 58 ~ gapYear", gapYear);
// const gapMonth = countDateMs.getMonth() - nowMs.getMonth();
const gapMonth = Math.floor(Math.abs(gap / month));
console.log("🚀 ~ file: app.js ~ line 59 ~ gapMonth", gapMonth);
const gapDay = Math.round(gap / day);
console.log("🚀 ~ file: app.js ~ line 62 ~ gapDay", gapDay);
const gapWeek = Math.floor(Math.abs(gapDay) / 7);
console.log("🚀 ~ file: app.js ~ line 64 ~ gapWeek", gapWeek);
const gapHour = Math.round((gap % day) / hour);
console.log("🚀 ~ file: app.js ~ line 68 ~ gapHour", gapHour)
const gapMinute = Math.round((gap % hour) / minute);
const gapSecond = Math.round((gap % minute) / second);

let result;

const pastDateCalculator = new Intl.RelativeTimeFormat("fa", {
  localeMatcher: "best fit",
  numeric: "always",
  style: "long",
});
if (gapYear > 0) result = pastDateCalculator.format(-gapYear, "year");
if (gapYear === 0 && Math.floor(-gapMonth) < 0)
  result = pastDateCalculator.format(-gapMonth, "month");

// if (gapYear === 0 && Math.abs(gapMonth) === 0 && gapWeek >= 1)
//   console.log("yes");
if (gapYear === 0 && gapMonth === 0 && gapWeek >= 1)
  result = pastDateCalculator.format(-gapWeek, "week");
if (gapYear === 0 && gapMonth === 0 && gapWeek === 0 && gapDay < 0)
  result = pastDateCalculator.format(gapDay, "day");
if (gapYear === 0 && gapMonth === 0 && gapWeek === 0 && gapDay === 0 && gapHour < 0)
  result = pastDateCalculator.format(gapHour, "hour");
if (gapYear === 0 && gapMonth === 0 && gapWeek === 0 && gapDay === 0 && gapHour === 0 && gapMinute < 0)
  result = pastDateCalculator.format(gapMinute, "minute");
console.log(result);

element.textContent = result;