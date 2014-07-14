function Calculator () {
	'use strict';

	var _cache = {};
	var _isResultFromCache = false;
	var _operations = {'operation_0': 'add', 'operation_1': 'sub', 
		'operation_2': 'multipe', 'operation_3': 'division', 
		'operation_4': 'pow'};

	this.islastResultFromCache = function () {
		return _isResultFromCache;
	};


	this.operation = function (a, b, operationName) {
		var result;
		var functionName = _operations[operationName];

		var cacheKey = a + operationName + b;
		_isResultFromCache = this.isCached(a, b, operationName);
		if ( _isResultFromCache ){
			result = _cache[cacheKey];
		}
		else
		{
			result = this[functionName](a, b);
			_cache[cacheKey] = result;
		}

		return result;
	};


	this.isCached = function (a, b, op){
		var result = false;
		var cacheKeys = [a + op + b];

		if (op === 'add' || op === 'multipe' ){
			cacheKeys.push(b + op + a);
		}

		for (var key in cacheKeys) {
			if (_cache[cacheKeys[key]]){
				result = true;
				break;
			}
		};

		return result;
	};

	//Operation methods:
	this.add = function (a, b) {
		return a + b;
	};

	this.sub = function (a, b) {
		return a - b;
	};

	this.multipe = function (a, b) {
		return a * b;
	};

	this.division = function (a, b) {
		return a / b;
	};

	this.pow = function (a, b) {
		return Math.pow(a, b);
	};	
}