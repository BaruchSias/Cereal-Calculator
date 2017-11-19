$(document).ready(function(){

	//Camel case minúscula
	var save = '';
	var aux;
	var currentOperation = '';
	var result;

	$('.calculator-number').on('click', function(){
		console.log('clicked button', $(this).text(), typeof $(this).text())
		console.log('save before', save)
		save = save + $(this).text()
		console.log('save after', save)
		$('.calculator-display').val(save)
		/*save variable saves the number that we want to store within our inputs*/
	});

	$('.plus').on('click', function(){
		aux = save;
		save = '';
		$('.calculator-display').val('')
		console.log('aux', aux)
		currentOperation = '+';
	});

	$('.equals').on('click', function(){
		switch(currentOperation){
			case ('+'): 
			console.log('plus');
			if (save!='' && !!aux) { // !! gives u if the statement is false
				result = Number(save) + Number(aux);
				$('.calculator-display').val(result)
			}

			else
				alert('Error Fatal')

			break;

			default:
			alert('No Operation');
			break;
		}
	})

});