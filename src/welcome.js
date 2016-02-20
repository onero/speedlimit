export class Speed {
  heading = 'Speed ticket calculator';
  speed = 50;
  limit = 50;
  percentile = [19, 29, 39, 49, 59, 69, 79, 89, 99, 9999];
  zone1 = [
            1000,
            1500,
            1500,
            2000,
            2000,
            2500,
            3000,
            3500,
            4500,
            5000
          ];
  zone2 = [
            1000,
            1500,
            2000,
            2500,
            3000,
            3500,
            4500,
            5000,
            6500,
            7500
          ];
  zone3 = [
            1500,
            1500,
            2000,
            2500,
            3000,
            3500,
            4500,
            5000,
            6500,
            7500
          ];
  roadTypes = ['By', 'Landevej/Motortrafikvej', 'Motorvej'];
  vechicles = ['Personbil, varebil og minibus', 'Motorcykel med og uden sidevogn', 'Bus', 'Lastbil'];
  selectedRoadType = this.roadTypes[0];
  selectedVechicle = this.vechicles[0];

//Array with speed limits for roadTypes and vechicles
  speedlimits() {
    let roadIndex = this.roadTypes.indexOf(this.selectedRoadType);
    let vehicleIndex = this.vechicles.indexOf(this.selectedVechicle);
    let speedlimits = {
      0: { // By område
        0: 50,  // Køretøj under 3500 uden påhång
        1: 50,  // Motorcykel med eller uden sidevogn uden påhång
        2: 50,  // Køretøj over 3500 med eller uden påhång
        3: 50   // Køretøj over 3500 med eller uden påhång
      },
      1: { // Landevej/Motortrafikvej
        0: 80,  // Køretøj under 3500 uden påhång
        1: 80,  // Motorcykel med eller uden sidevogn uden påhång
        2: 70,  // Køretøj over 3500 med eller uden påhång
        3: 70   // Køretøj over 3500 med eller uden påhång
      },
      2: { // Motorvej
        0: 130, // Køretøj under 3500 uden påhång
        1: 130, // Motorcykel med eller uden sidevogn uden påhång
        2: 80,  // Køretøj over 3500 med eller uden påhång
        3: 80   // Køretøj over 3500 med eller uden påhång
      }
    }
    console.log(roadIndex, vehicleIndex);
    this.limit = speedlimits[roadIndex][vehicleIndex];
    this.speed = speedlimits[roadIndex][vehicleIndex];
    return true;
  }

//Calculate percentile for driving limit
  percent() {
    return Math.max(0, Math.floor((this.speed-this.limit)/this.limit*100));
  }

  get calculatePercent() {
    return this.percent();
  }

  get calculateTicket() {
    let percent = this.percent();
    let previous = 0;
    let ticket = 0;
    let total = 0;
    for (var i = 0; i < this.percentile.length; i++){

      if (percent > previous && percent < this.percentile[i]) {
        ticket = this.zone1[i];
      }

      previous=this.percentile[i];
    }

    ticket += this.speed >= 140 ? 1000 + 500 * ((Math.floor(this.speed / 10) * 10) - 140) / 10 : 0;

    return Math.min(ticket, 12500);
  }
}
