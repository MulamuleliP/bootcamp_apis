import assert from 'assert';
import { enoughAirtime } from '../bootcamp/enoughAirtime.js';

describe('The enoughAirtime function', function(){

    it('should calculate the correct remaining airtime for "call,sms,call" with 54 available', function(){
        assert.equal(enoughAirtime('call,sms,call', 54), 49.49);
    });

    it('should return 0 when the available airtime is exhausted', function(){
        assert.equal(enoughAirtime('call,call,call,call', 10), 2.48);
    });

    it('should handle cases where no airtime is available', function(){
        assert.equal(enoughAirtime('sms,sms', 0), 'not enough airtime');
    });
});
