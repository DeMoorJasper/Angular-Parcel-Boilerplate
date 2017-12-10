/// <reference path="../typings/globals/mocha/index.d.ts" />
/// <reference path="../typings/globals/chai/index.d.ts" />

declare const assert: any;

describe('example test', function () {
    it('1 + 1 should equal 2', function () {
        assert.equal(1 + 1, 2);
    });
    it('index 0 of array should be 1', function () {
        let arr = [1, 2, 3, 4];

        assert.equal(arr[0], 1);
    });
});