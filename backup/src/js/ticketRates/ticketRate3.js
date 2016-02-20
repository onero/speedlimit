function ticketRate3() {
  if (speedLimit === 30) {
    if (drivingSpeed > speedLimit && drivingSpeed < 1.2*speedLimit) {
      ticketFine = 1000;
    } else if (drivingSpeed >= 1.2*speedLimit && drivingSpeed < 1.39*speedLimit) {
      ticketFine = 1500;
    } else if (drivingSpeed >= 1.4*speedLimit && drivingSpeed < 1.59*speedLimit) {
      ticketFine = 2000;
    } else if (drivingSpeed >= 1.6*speedLimit && drivingSpeed < 1.69*speedLimit) {
      ticketFine = 2500;
    } else if (drivingSpeed >= 1.7*speedLimit && drivingSpeed < 1.79*speedLimit) {
      ticketFine = 3000;
    } else if (drivingSpeed >= 1.8*speedLimit && drivingSpeed < 1.89*speedLimit) {
      ticketFine = 3500;
    } else if (drivingSpeed >= 1.9*speedLimit && drivingSpeed < 1.99*speedLimit) {
      ticketFine = 4500;
    } else if (drivingSpeed >= 2*speedLimit) {
      ticketFine = 5000;
    }

  } else {

  }
  console.log('ticketFine:', ticketFine);
};
