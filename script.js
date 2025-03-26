const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultDiv = document.getElementById("results-div");

function checkNumber() {
	const input = userInput.value;
	const regex = /^(?:1 |1)?(?:\(\d{3}\)|\d{3})[ -]?\d{3}[ -]?\d{4}$/;
	if (input === "") {
		alert("Please provide a phone number");
	} else if (regex.test(input)) {
		resultDiv.innerHTML += `<p>Valid US number: ${input}</p>`;
	} else {
		resultDiv.innerHTML += `<p>Invalid US number: ${input}</p>`;
	}
	userInput.focus();
}

function clearResult() {
	resultDiv.textContent = "";
	userInput.focus();
}

clearBtn.onclick = clearResult;
checkBtn.onclick = checkNumber;

userInput.addEventListener("keyup", (event) => {
	if (event.key === "Enter") {
		checkNumber();
	}
});
