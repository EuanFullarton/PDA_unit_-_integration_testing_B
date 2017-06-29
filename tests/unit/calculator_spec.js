var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')


describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  it('should add to runningTotal', function(){
    calculator.previousTotal = 1;
    calculator.add(4);
    assert.equal(5, calculator.runningTotal);
  })

  it('should subtract from runningTotal', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.equal(3, calculator.runningTotal);
  })

  it('should multiply to runningTotal', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.equal(15, calculator.runningTotal);
  })

  it('should divide from runningTotal', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.equal(3, calculator.runningTotal);
  })

  it('should add to runningTotal using numberClick and operatorClick', function(){
    calculator.numberClick(2);
    calculator.operatorClick('+');
    calculator.numberClick(2);
    calculator.operatorClick('=');
    assert.equal(4, calculator.runningTotal);
  })

  it('should subtract from runningTotal using numberClick and operatorClick', function(){
    calculator.numberClick(2);
    calculator.operatorClick('+');
    calculator.numberClick(2);
    calculator.operatorClick('-');
    calculator.numberClick(3);
    calculator.operatorClick('=');
    assert.equal(1, calculator.runningTotal);
  })

  it('should multiply to runningTotal using numberClick and operatorClick', function(){
    calculator.numberClick(2);
    calculator.operatorClick('*');
    calculator.numberClick(2);
    calculator.operatorClick('=');
    assert.equal(4, calculator.runningTotal);
  })

  it('should divide from runningTotal using numberClick and operatorClick', function(){
    calculator.numberClick(6);
    calculator.operatorClick('/');
    calculator.numberClick(2);
    calculator.operatorClick('=');
    assert.equal(3, calculator.runningTotal);
  })

  it('should set runningTotal to zero using clearClick', function(){
    calculator.numberClick(6);
    calculator.operatorClick('*');
    calculator.numberClick(6);
    calculator.operatorClick('=');
    calculator.clearClick();
    assert.equal(0, calculator.runningTotal);
  })

  it('should concatenate multiple number button clicks', function(){
    calculator.numberClick(6);
    calculator.numberClick(5);
    calculator.numberClick(8);
    calculator.operatorClick('+');
    calculator.numberClick(2);
    calculator.operatorClick('=');
    assert.equal(660, calculator.runningTotal);
  })

  it('should chain multiple operations together', function(){
    calculator.numberClick(5);
    calculator.operatorClick('*');
    calculator.numberClick(2);
    calculator.operatorClick('/');
    calculator.numberClick(1);
    calculator.numberClick(0);
    calculator.operatorClick('+');
    calculator.numberClick(1);
    calculator.operatorClick('=');
    assert.equal(2, calculator.runningTotal);
  })

  it('should clear the running total without affecting the calculation', function(){
    calculator.numberClick(6);
    calculator.operatorClick('*');
    calculator.numberClick(6);
    calculator.clearClick()
    calculator.numberClick(5);
    calculator.operatorClick('=');
    assert.equal(30, calculator.runningTotal);
  })

});
