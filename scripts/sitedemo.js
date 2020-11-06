console.log ("Loading js....");
let controls = {"pageTxt" :null, "pageErrs":null, "MainContent_Errors":null, "pageErrorErrs":null, "submitBtn":null};

for (let k in controls) {
	controls[k] = document.getElementById(k);
}

function submitHandler (e) {
	e.preventDefault();
	if (controls["MainContent_Errors"].value == -1 {
		controls["pageErrorErrs"].innerHTML = "Please slect a page error.";
	}
	if (controls["pageTxt"].value == "") {
		controls["pageErrs"].innerHTML = "Please enter a page.";
}

controls["submitBtn"].addEventListener("click", submitHandler, false);
