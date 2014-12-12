/* global describe, it */
'use strict';

var expect = require('chai').expect;
var traceur = require('traceur');
var Calculator = traceur.require(__dirname + '/../../app/models/calculator.js');

describe('Calculator', function(){
	describe('.add', function(){
   		it('should add two numbers', function(){  //describe block
   			var sum = Calculator.add(2,3);
   			expect(sum).to.equal(5);   //assertion
   		}); 
	});

	describe('.subtract', function(){
		it('should find the difference between two numbers', function(){
			var difference1 = Calculator.subtract(3,2);
			expect(difference1).to.equal(1);

			var difference2 = Calculator.subtract(-4, -2);
			expect(difference2).to.equal(-2);

		});
	});
	describe('.pow', function(){
		it('should take one number to the power of the other', function(){
			var pow = Calculator.power(4, 2);
			expect(pow).to.equal(16);

			var pow2 = Calculator.power(-2, 3);
			expect(pow2).to.equal(-8);
		});
	});
	describe('.sum', function(){
		it('should add up a list of numbers', function(){
			var sum = Calculator.sum([3,4,5]);
			expect(sum).to.equal(12);
		});
	});
	describe('.fractions', function(){
		it('should add fractions', function(){
			var fracSum = Calculator.addFraction([[1,2], [1,3], [2,5],[32,50]]);
			expect(fracSum).to.equal('2810/1500');
		});
	});
});