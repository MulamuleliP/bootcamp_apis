export function totalPhoneBill(bills) {
  const billList = bills.split(',');
  const call = 2.75;
  const sms = 0.65;
  let total = 0;

  for (let i = 0; i < billList.length; i++) {
    const bill = billList[i].trim();
    
    if (bill === 'call') {
      total += call;
    } else if (bill === 'sms') {
      total += sms;
    }
  }

  return total.toFixed(2);
}

  