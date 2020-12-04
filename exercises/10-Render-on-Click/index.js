let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
var node = document.createElement("Div");
	node.innerHTML = "Hello World";
	node.style.backgroundColor = "Yellow";
	document.body.appendChild(node);
});

// let button = document.querySelector("#superDuperButton");
// button.addEventListener("click", function() {
// 	document.createElement("newDiv");
// 	newDiv.innerHTML = "<div>'Hello World'</div>";
// 	newDiv.style.background = "yellow";
// 	newDiv.appendChild(body);
// });
