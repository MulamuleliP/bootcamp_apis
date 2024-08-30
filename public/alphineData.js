document.addEventListener('alpine:init', () => {
  Alpine.data('airtimeCalculator', () => ({
      usage: '',
      airtime: '',
      remainingAirtime: null,
      errorAirtime: null,
      calculateAirtime() {
          if (this.usage && this.airtime) {
              const usage = parseFloat(this.usage);
              const airtime = parseFloat(this.airtime);

              if (!isNaN(usage) && !isNaN(airtime)) {
                  this.remainingAirtime = airtime - usage;
                  this.errorAirtime = null;
              } else {
                  this.remainingAirtime = null;
                  this.errorAirtime = 'Please enter valid numbers for usage and airtime.';
              }
          } else {
              this.remainingAirtime = null;
              this.errorAirtime = 'Please enter both usage and airtime values.';
          }
      },
      resetAirtimeCalculator() {
          this.usage = '';
          this.airtime = '';
          this.remainingAirtime = null;
          this.errorAirtime = null;
      }
  }));

  Alpine.data('phoneBillCalculator', () => ({
      bills: '',
      total: null,
      errorBill: null,
      calculateTotalBill() {
          if (this.bills) {
              const billArray = this.bills.split(',').map(Number);

              if (billArray.every(num => !isNaN(num))) {
                  this.total = billArray.reduce((sum, bill) => sum + bill, 0);
                  this.errorBill = null;
              } else {
                  this.total = null;
                  this.errorBill = 'Please enter a valid list of numbers separated by commas.';
              }
          } else {
              this.total = null;
              this.errorBill = 'Please enter a bill value.';
          }
      },
      resetBillCalculator() {
          this.bills = '';
          this.total = null;
          this.errorBill = null;
      }
  }));

  Alpine.data('wordGame', () => ({
      sentence: '',
      longestWord: null,
      shortestWord: null,
      wordLengthSum: null,
      errorWordGame: null,
      analyzeSentence() {
          if (this.sentence) {
              const words = this.sentence.split(' ').filter(word => word.length > 0);

              if (words.length > 0) {
                  this.longestWord = words.reduce((a, b) => a.length > b.length ? a : b);
                  this.shortestWord = words.reduce((a, b) => a.length < b.length ? a : b);
                  this.wordLengthSum = words.reduce((sum, word) => sum + word.length, 0);
                  this.errorWordGame = null;
              } else {
                  this.errorWordGame = 'Please enter a valid sentence with words.';
              }
          } else {
              this.errorWordGame = 'Please enter a sentence.';
          }
      },
      resetWordGame() {
          this.sentence = '';
          this.longestWord = null;
          this.shortestWord = null;
          this.wordLengthSum = null;
          this.errorWordGame = null;
      }
  }));
});
