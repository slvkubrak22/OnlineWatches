
// setInterval(function() {
//   const clock = document.querySelector(".display");
//   let time = new Date();
//   // clock.textContent = time;
//   let sec = time.getSeconds();
//   let min = time.getMinutes();
//   let hour = time.getHours();
//   let day = "am";
//   if (hour > 12) {
//     day = "pm"
//     hour -= 12;
//   }
//   if (hour == 0) {
//     hour = 12;
//   }
//   if (sec < 10) {
//     sec = "0" + sec;
//   }
//   if (min < 10) {
//     min = "0" + min;
//   }
//   if (hour < 10) {
//     hour = "0" + hour;
//   }
//   alert(hour + "hr" + min + "min" + sec + "sec");
//   clock.textContent = hour + ":" + min + ":" + sec + ` ${}`;
  
// });