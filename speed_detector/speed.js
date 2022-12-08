//Function takes speed as parameter
function speedDetector(speed) {
  //calculates points by taking speed and subtractiong seventy then the remainder is divide by five to give points
  let points = (speed - 70) / 5;
  //Checks speed and if less or equal to seventy gives an ok
  if (speed <= 70) {
    console.log("Ok");
    //If points returned exceed 12 licence is suspended
  } else if (points > 12) {
    console.log("License suspended");
    //Shows the pionts
  } else {
    console.log(`Points: ${points}`);
  }
}

speedDetector(78);
