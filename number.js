function NumberOperations () {
	var cache = new Object();

	var _methodSignPair = {'add': '+', 'minus': '-'}; 

	this.operation = function (a, b, opsign) {
		var result;

		opsign = _methodSignPair[opsign];

		var abkey = a + opsign + b;
		if (this.isABPairContainCache(a,b, opsign) == true){
			result = cache[abkey];
		}
		else
		{
			var exeString = a + opsign + b;
			result = eval(exeString);
			//save in cache
			cache[abkey] = result;
		}
		return result;
	}

	this.isABPairContainCache = function(a, b, op){
		var result = false;
		var abkeys = [a + op + b, b + op + a];
		for (var abkey in abkeys) {
			if (cache[abkey]){
				result = true;
				break;
			}
		};
		return result;
	}
}