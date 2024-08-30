
export function enoughAirtime(usage, airtime) {
  var callCost = 1.88;
  var dataCost = 12;
  var smsCost = 0.75;
  var usageArray = usage.split(',');
  let totalCost = 0;

  if (airtime <=0) {
    return 'not enough airtime'
  }
  for (let i = 0; i < usageArray.length; i++) { 
    switch (usageArray[i].trim()) {
      case 'call':
        totalCost += callCost;
        break;
      case 'data':
        totalCost += dataCost;
        break;
      case 'sms':
        totalCost += smsCost;
        break;
      default:
        break;
    }
  }

  const remainingAirtime = airtime - totalCost;
  return parseFloat(remainingAirtime >= 0 ? remainingAirtime.toFixed(2) : '0.00');
}


  