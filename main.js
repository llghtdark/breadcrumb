const main = document.getElementById("main");

function createCheckboxes() {
		let checkbox = document.createElement("input");
		checkbox.setAttribute("type","checkbox");
		checkbox.className = "butts";
		main.appendChild(checkbox);
}
