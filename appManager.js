function AppManager () { //strict mode

	this.run = function (calculator, document) {
		var firstOperand  = parseInt(document.getElementById('first_operand').value);
		var secondOperand = parseInt(document.getElementById('second_operand').value);
		
		var operationName = document.getElementsByTagName('select')[0].value;

		document.getElementById('result_calculation').innerHTML = 
		calculator.operation(firstOperand, secondOperand, operationName);
		
	}
	
}