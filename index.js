import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

// Importing the Word Game functions
import { longestWord, shortestWord, wordLengths } from './bootcamp/wordgame.js';
// Importing the enough airtime function
import { enoughAirtime } from './bootcamp/enoughAirtime.js';
// Importing the total PhoneBill function
import { totalPhoneBill } from './bootcamp/totalPhoneBill.js';

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(express.static('public'));


// Word Game 
app.get('/api/word_game', (req, res) => {
    const sentence = req.query.sentence || '';
    
    if (!sentence) {
        return res.status(400).json({ error: 'Sentence query parameter is required' });
    }
    
    try {
        const longest = longestWord(sentence);
        const shortest = shortestWord(sentence);
        const sum = wordLengths(sentence);
        
        res.json({
            longestWord: longest,
            shortestWord: shortest,
            sum: sum
        });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// Enough airtime
app.post('/api/enough', (req, res) => {
  const { usage, available } = req.body;
  if (!usage || available === undefined) {
    return res.status(400).json({ error: 'usage and available parameters are required' });
  }

  // Calculate the remaining airtime
  const result = enoughAirtime(usage, available);
  
  // Return the result in the expected format
  return res.json({ result });
});


  // totalPhoneBill

let callPrice = 2.75;
let smsPrice = 0.65;

// POST route to calculate the total phone bill
app.post('/api/phonebill/total', (req, res) => {
  const { bill } = req.body;
  if (!bill) {
    return res.status(400).json({ error: 'bill parameter is required' });
  }

  // Call the totalPhoneBill function with only the bill string
  const result = totalPhoneBill(bill);
  return res.json({ total: parseFloat(result) });
});

// GET route to return the current prices for a call and SMS
app.get('/api/phonebill/prices', (req, res) => {
  return res.json({
    call: callPrice,
    sms: smsPrice
  });
});

// POST route to set new prices for a call or SMS
app.post('/api/phonebill/price', (req, res) => {
  const { type, price } = req.body;

  if (!type || typeof price !== 'number') {
    return res.status(400).json({ error: 'type and price parameters are required' });
  }

  if (type === 'call') {
    callPrice = price;
  } else if (type === 'sms') {
    smsPrice = price;
  } else {
    return res.status(400).json({ error: 'type must be either "call" or "sms"' });
  }

  return res.json({
    status: 'success',
    message: `The ${type} price was set to ${price.toFixed(2)}`
  });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});