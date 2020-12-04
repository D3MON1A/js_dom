let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
    //your code here
    let list = document.querySelector("#myList");
	let newNode = document.createElement("li");
	newNode.innerHTML = "Fourth element";
	list.appendChild(newNode);

});
