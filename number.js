function Calculator () {
	'use strict';

	var _cache = {};
	var _isResultFromCache = false;
	var _operations = {'add': _add, 'sub': _sub, 
		'multipe': _multiple, 'division': _division, 
		'pow': _pow};

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
	function _add(a, b) {
		return a + b;
	}

	function _sub(a, b) {
		return a - b;
	}

	function _multiple(a, b) {
		return a * b;
	}

	function _division(a, b) {
		return a / b;
	}

	function _pow(a, b) {
		return Math.pow(a, b);
	}	
}