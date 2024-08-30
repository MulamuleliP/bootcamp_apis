import assert from "assert";
import { totalPhoneBill } from "../bootcamp/totalPhoneBill.js";

describe('The totalPhoneBill function', function() {

    it('should calculate the total for "call, sms, call"', function() {
        const result = totalPhoneBill('call, sms, call');
        assert.equal(parseFloat(result), 6.15);
    });

    it('should calculate the total for "sms, sms, call"', function() {
        const result = totalPhoneBill('sms, sms, call');
        assert.equal(parseFloat(result), 4.05);
    });

    it('should return 0 for an empty string', function() {
        const result = totalPhoneBill('');
        assert.equal(parseFloat(result), 0);
    });

});
