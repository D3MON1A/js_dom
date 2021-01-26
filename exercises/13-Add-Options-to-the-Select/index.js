// window.onload = function() {
// 	console.log("The website was loaded...");
// 	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

// 	// your code here
// 	countries.map(country => {
// 		var elem = document.createElement("option");
// 		elem.innerHTML = country;
// 		document.querySelector("#mySelect").appendChild(elem);
// 	});
// };

window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

	// your code here
	let selection = document.querySelector("#mySelect");
	selection.addEventListener("change", function(e) {
		alert(e.target.value);
	});

	for (let i = 0; i < countries.length; i++) {
		var newOption = document.createElement("option");
		newOption.value = countries[i];
		newOption.innerHTML = countries[i];
		selection.appendChild(newOption);
		console.log(newOption);
	}
};
