function AppManager () { 
	"use strict";
	this.run = function (calculator, document) {
		document.getElementById('from_cache').style.display = '';
		var firstOperand  = parseInt(document.getElementById('first_operand').value);
		var secondOperand = parseInt(document.getElementById('second_operand').value);
		
		var operationName = document.getElementsByTagName('select')[0].value;

		document.getElementById('result_calculation').innerHTML = 
		calculator.operation(firstOperand, secondOperand, operationName);
		if (calculator.islastResultFromCache() === true){
			document.getElementById('from_cache').innerHTML = "Result from cache";
		}
		else{
			document.getElementById('from_cache').innerHTML = "Result calculated";
		}
	}
	
}