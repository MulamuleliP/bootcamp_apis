import assert from 'assert';
import { longestWord, shortestWord, wordLengths } from '../bootcamp/wordgame.js';

describe('The Word Game API', function () {

    it('should return the longest and shortest words, and the sum of word lengths for a given sentence', function () {
        const sentence = 'The quick brown fox jumps over the lazy dog';
        
        const longest = longestWord(sentence);
        const shortest = shortestWord(sentence);
        const sum = wordLengths(sentence);

        assert.equal(longest, 'jumps'); 
        assert.equal(shortest, 'dog'); 
        assert.equal(sum, 35); 
    });

    it('should return an error if the sentence is not provided', function () {
        const sentence = '';
        
        assert.throws(() => {
            longestWord();
        });
    
        assert.throws(() => {
            shortestWord();
        });
    
        assert.throws(() => {
            wordLengths();
        });
    });
    
});
