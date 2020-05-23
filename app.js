
// todoFunction() used on button click to get user-input
function todoFunction() {
	// to store the value put by user in the input box
    var one    = $("#todoNotesInput")[0].value
    
	// creating text node 
	var two    = document.createTextNode(one)
	// li tag
	var three = document.createElement('li')
	// adding input to li tag
	three.appendChild(two)
	// appending li to the html todoFunction
    document.getElementById('checklist').appendChild(three)
    
}