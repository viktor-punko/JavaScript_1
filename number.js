function Calculator () {
	var _cache = {};
	var _isResultFromCache = false;

	this.islastResultFromCache = function () {
		return _isResultFromCache;
	}

	this.operation = function (a, b, operationName) {
		var result;

		var cacheKey = a + operationName + b;
		if ( this.isOperandPairContainInCache(a, b, operationName)){
			result = _cache[cacheKey];
			_isResultFromCache = true;
		}
		else
		{
			result = this[operationName](a, b);
			//save in _cache
			_cache[cacheKey]      = result;
			_isResultFromCache = false;
		}
		return result;
	}

	this.isOperandPairContainInCache = function (a, b, op){
		var result = false;
		var cacheKeys = [a + op + b];

		if (op === 'add' || op === 'multipe' ){
			cacheKeys.push(b + op + a)
		}

		for (var key in cacheKeys) {
			if (_cache[key]){
				result = true;
				break;
			}
		};

		return result;
	}

	//Operation methods:
	this.add = function (a, b) {
		return a + b;
	};

	this.minus = function (a, b) {
		return a - b;
	}

	this.multipe = function (a, b) {
		return a * b;
	}

	this.division = function (a, b) {
		return a / b;
	}

	this.pow = function (a, b) {
		return Math.pow(a, b);
	}	
}