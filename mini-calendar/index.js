let date = document.getElementById("date");
let day = document.getElementById("day");
let year = document.getElementById("year");
let month = document.getElementById("month");

let calendar = new Date;

const cdate = calendar.getDate();
const cday = calendar.toLocaleDateString('en-US', { weekday: 'long' });
const cyear = calendar.getFullYear();
const cmonth = calendar.toLocaleString('default', { month: 'short' });

date.innerText = cdate;
day.innerText = cday;
year.innerText = cyear;
month.innerText = cmonth;