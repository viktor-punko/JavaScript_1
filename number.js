function NumberOperations () {
	var _cache = {};

	var _methodSignPair = {'add': '+', 'minus': '-'}; 

	this.operation = function (a, b, opsign) {
		var result;

		opsign = _methodSignPair[opsign];

		var abkey = a + opsign + b;
		if (this.isABPairContain_cache(a,b, opsign) === true){
			result = _cache[abkey];
		}
		else
		{
			var exeString = a + opsign + b;
			result = eval(exeString); //надо убрать
			//save in _cache
			_cache[abkey] = result;
		}
		return result;
	}

	this.isABPairContain_cache = function(a, b, op){
		var result = false;
		var abkeys = [a + op + b];
		for (var abkey in abkeys) {
			if (_cache[abkey]){
				result = true;
				break;
			}
		};
		return result;
	}
}