console.log(1);

function checkFlightSchedule(call) {
  console.log(2);

  setTimeout(function() {
    console.log(3);
    var scheduleInfo = {
      start: '8/23 8:00',
    };
    console.log(4);
 
    callback(scheduleInfo.start);
    console.log(11)
  }, 5000);
  console.log(5);
}

console.log(6)

//---------------------------------------
function callback(startTime) {
  console.log(7);
  console.log(startTime);
  console.log(8);
}
console.log(9);



checkFlightSchedule();

console.log(10);
