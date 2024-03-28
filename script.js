// This function updates the output space to an empty string
// and clears the input field when called.
function showConversion(conversionType) {
    // Clear the output space
    document.getElementById("output").innerHTML = "";
    // Get the input field and clear its value
    var inputElement = document.getElementById("inputNumber");
    inputElement.value = "";
    
    // Update the input field's placeholder text based on the conversion type
    switch(conversionType) {
        case "decimalToBinary":
            inputElement.placeholder = "Enter a whole number";
            break;
        case "binaryToDecimal":
            inputElement.placeholder = "Enter a binary number";
            break;
        case "decimalToOctal":
            inputElement.placeholder = "Enter a whole number";
            break;
        case "octalToDecimal":
            inputElement.placeholder = "Enter an octal number";
            break;
        case "decimalToHex":
            inputElement.placeholder = "Enter a whole number";
            break;
        case "hexToDecimal":
            inputElement.placeholder = "Enter a hexadecimal number";
            break;
    }
}

// This function clears the input field and the output space
// when the reset button is clicked.
function resetInput() {
    // Clear the input field
    document.getElementById("inputNumber").value = "";
    // Clear the output space
    document.getElementById("outputSpace").innerHTML = "";
}

// This function converts the input number according to its type
// and displays the conversion result in the output space.
function convert() {
    // Get the trimmed value of the input field
    var inputNumber = document.getElementById("inputNumber").value.trim();
    // Get the element for displaying output
    var outputElement = document.getElementById("output");

    // Check if the input is empty
    if (inputNumber === "") {
        // Show an error message if the input is empty
        outputElement.innerHTML = "Please enter a number.";
        return;
    }

    // Determine the type of conversion based on the input field's placeholder
    var conversionType = document.getElementById("inputNumber").placeholder;
    // Initialize a variable to store the conversion result
    var conversionResult = "";

    // Perform the conversion based on the input field's placeholder
    switch(conversionType) {
        case "Enter a whole number":
            // Check if the input is a valid whole number
            if (!/^\d+$/.test(inputNumber)) {
                outputElement.innerHTML = "Please enter a valid whole number.";
                return;
            }
            // Convert the input number to binary, octal, and hexadecimal
            conversionResult += "Binary: " + (+inputNumber).toString(2) +
                "<br>Octal: " + (+inputNumber).toString(8) +
                "<br>Hexadecimal: " + (+inputNumber).toString(16).toUpperCase();
            break;

        case "Enter a binary number":
            // Check if the input is a valid binary number
            if (!/^[01]+$/.test(inputNumber)) {
                outputElement.innerHTML = "Please enter a valid binary number.";
                return;
            }
            // Convert the binary input to decimal, octal, and hexadecimal
            conversionResult += "Decimal: " + parseInt(inputNumber, 2) +
                "<br>Octal: " + parseInt(inputNumber, 2).toString(8) +
                "<br>Hexadecimal: " + parseInt(inputNumber, 2).toString(16).toUpperCase();
            break;

        case "Enter an octal number":
            // Check if the input is a valid octal number
            if (!/^[0-7]+$/.test(inputNumber)) {
                outputElement.innerHTML = "Please enter a valid octal number.";
                return;
            }
            // Convert the octal input to decimal, binary, and hexadecimal
            conversionResult += "Decimal: " + parseInt(inputNumber, 8) +
                "<br>Binary: " + parseInt(inputNumber, 8).toString(2) +
                "<br>Hexadecimal: " + parseInt(inputNumber, 8).toString(16).toUpperCase();
            break;
            
        case "Enter a hexadecimal number":
            // Check if the input is a valid hexadecimal number
            if (!/^[0-9A-Fa-f]+$/.test(inputNumber)) {
                outputElement.innerHTML = "Please enter a valid hexadecimal number.";
                return;
            }
            // Convert the hexadecimal input to decimal, binary, and octal
            conversionResult += "Decimal: " + parseInt(inputNumber, 16) +
                "<br>Binary: " + parseInt(inputNumber, 16).toString(2) +
                "<br>Octal: " + parseInt(inputNumber, 16).toString(8);
            break;
    }


    // Update the output space with the conversion result
    var outputSpaceElement = document.getElementById("outputSpace");
    outputSpaceElement.innerHTML = conversionResult;
}
