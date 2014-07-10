function NumberOperation () {
	var cache = new Object();

	this.add = function (a, b) {
		var result;
		if (isABPairContainCache(a,b, "+") == true){

		}
		else
		{
			result = a + b;
			//save in cache
			cache[a + "+" + b] = result;
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