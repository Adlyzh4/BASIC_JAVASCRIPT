function main() {
  //take flight number and its status
  var flightNumber = "NGT 929";
  var flightStatus = "Landed";

  var flight1 = new Flight(flightNumber, flightStatus);
  //assign a flight object to flight1 variable

  //output
  console.log("The flight " + flight1.number + " is " + flight1.status);
}

function Flight(flightNumber, status) {
  //fix the constructor
  this.number = flightNumber;
  this.status = status;
}
main();
