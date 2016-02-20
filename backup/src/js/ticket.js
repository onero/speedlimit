var speedLimit = 110;
var drivingSpeed = 165;
var ticketFine = 0;
var percentile = 0;
var ticketRate;

var vehicle = [
  'Personbil',
  'Motorcykel',
  'Bus',
  'Lastbil'
];

var roadType = [
  'Byzone',
  'Landevej',
  'Motorvej'
];

var percentile = [
  19,
  29,
  39,
  49,
  59,
  69,
  79,
  89,
  99,
  999
];

var ticketRate1=[1000, 1500, 1500, 2000, 2000, 2500, 3000, 3500, 4500, 5000];

var ticketRate2=[1500, 1500, 2000, 2500, 3000, 3500, 4500, 5000, 6500, 7500];

var ticketRate3=[1000, 1500, 2000, 2500, 3000, 3500, 4500, 5000, 6500, 7500];

// var ticketRate4=[29, 1000, 60, 1500, 1000, 2000];
//
// var ticketRate5=[29, 1000, 60, 2000, 1000, 2500];


function calculatePercentile() {
  return Math.max(0, Math.floor((drivingSpeed - speedLimit)/speedLimit*100));
}


function getTicketRate() {
  if(drivingSpeed <= speedLimit){
		document.getElementById('ticket');
		document.getElementById('ticket').innerHTML="Du kører den tilladte hastighed eller under.";
  } else {
    if (roadType === 'Byzone' || roadType === 'Landevej' && vehicle === 'Personbil' || vehicle === 'Motorcykel') {
      ticketRate = ticketRate1;
    } else if (roadType === 'Motorvej' && vehicle === 'Personbil' || vehicle === 'Motorcykel') {
      ticketRate = ticketRate2;
    } else {
      ticketRate = ticketRate3;
    }
  }
};

function getTicket() {
  var percent = calculatePercentile();
  var previous = 0;
  var ticket = 0;
  for (var i = 0; i < this.percentile.length; i++){

      if (percent > previous && percent < this.percentile[i]) ticket = ticketRate[i];


      previous=this.percentile[i];
    }

    ticket += drivingSpeed >= 140 ? 1000 + 500 * ((Math.floor(speed / 10) * 10) - 140) / 10 : 0;

    return Math.min(ticket, 12500);
  };
