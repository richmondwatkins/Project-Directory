'use strict';
class Calculator{

	static add(x, y){
		var sum = x + y;
		return sum; 
	}

	static subtract(x,y){
		return x-y;
	}

	static power(x,y){
		return Math.pow(x, y);
	}

	static sum(arr){
		return arr.reduce(function(prev, curr){return prev + curr;}, 0);
	}

	static addFraction(arr){
		var commonDen = [];
		var top = [];
		arr.forEach(fract=> commonDen.push(fract[1]));
		commonDen = commonDen.reduce(function(prev, curr) {return prev* curr;}, 1);
		arr.map(frac=>{
			top.push(frac[0] * (commonDen/frac[1]));
		});
		top = top.reduce(function(prev, curr){return prev + curr;}, 0);
		return `${top}/${commonDen}`;
		
	}

}
module.exports = Calculator;

