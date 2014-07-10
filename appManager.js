function AppManager () { //strict mode

	this.run = function () {
		var a = parseInt(document.getElementById('a').value);
		var b = parseInt(document.getElementById('b').value);
		var idsTds4Results = ['add', 'minus'];
		
		for (var key in idsTds4Results) {
			var tdId = idsTds4Results[key];
			document.getElementById(tdId).innerHTML = operationsManager.operation(a, b,tdId);
		};
	}
	
}