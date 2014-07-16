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
			result = functionName(a, b);
			_cache[cacheKey] = result;
		}

		return result;
	};


	this.isCached = function (a, b, op){
		var result = false;
		var searchedKeys = [a + op + b];

		if (op === 'add' || op === 'multipe' ){
			searchedKeys.push(b + op + a);
		}

		for (var key in searchedKeys) {
			if (_cache[searchedKeys[key]]){
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