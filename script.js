// receive input

// strip input down to aplha numeric characters only

// check for palindrome

// render results

const userInput = document.getElementById("text-input");
const userButton = document.getElementById("check-btn");
const userSpan = document.getElementById("result");
let receivedInput = "";

function checkPalindrome () {
    var input = userInput.value;
    var strippedInput = "";

    if (input ==="") {
        alert("Please input a value")
    }

    console.log(input);

    strippedInput = input.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    console.log(strippedInput);

    var splitStrippedInput = strippedInput.split("");
    var reversedSplitStrippedInput = splitStrippedInput.reverse();
    var reversedInput = reversedSplitStrippedInput.join("");

    if (reversedInput === strippedInput) {
        result.textContent = input + " is a palindrome";
    } else {
        result.textContent = input + " is not a palindrome";
    }

    // console.log(reversedInput);
}




userButton.addEventListener("click", checkPalindrome);

console.log(receivedInput);