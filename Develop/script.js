var currentDay = $("#currentDay");
var date = luxon.DateTime.local().toFormat('MMMM dd, yyyy');
var currentHour = luxon.DateTime.local().toLocaleString({hour: '2-digit'})
console.log(currentHour);
console.log(date);
currentDay.append(date);
