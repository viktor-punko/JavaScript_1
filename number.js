function NumberOperations () {
	var cache = new Object();

	this.add = function (a, b) {
		var result;
		var abkey = a + '+' + b;
		if (isABPairContainCache(a,b, "+") == true){
			result = cache[abkey];
		}
		else
		{
			result = a + b;
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