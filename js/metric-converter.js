document.getElementById("convert-btn").addEventListener("click", function (event) {
    // prevent form from submitting and refreshing the page
    event.preventDefault();

    // capture numeric value from the HTML number field
    let input_value = document.getElementById("converter-value").value;

    // convert to numeric value
    input_value = parseFloat(input_value);

    if (isNaN(input_value)) {
        document.getElementById("conversion-result").innerHTML = "Please enter a valid number.";
        return;
    }

    // get the selected conversion type using getElementsByTagName and selectedIndex
    let selectList = document.getElementsByTagName("select")[0];
    let conversion = selectList.options[selectList.selectedIndex].value;

    let result;
    let fromUnit;
    let toUnit;

    if (conversion === "inch to centimeter") {
        result = input_value * 2.54;
        fromUnit = "inches";
        toUnit = "centimeters";
    } else if (conversion === "foot to centimeter") {
        result = input_value * 30.48;
        fromUnit = "feet";
        toUnit = "centimeters";
    } else if (conversion === "yard to meter") {
        result = input_value * 0.91;
        fromUnit = "yards";
        toUnit = "meters";
    } else if (conversion === "mile to kilometer") {
        result = input_value * 1.61;
        fromUnit = "miles";
        toUnit = "kilometers";
    } else if (conversion === "centimeter to inch") {
        result = input_value * 0.39;
        fromUnit = "centimeters";
        toUnit = "inches";
    } else if (conversion === "centimeter to foot") {
        result = input_value * 0.0328;
        fromUnit = "centimeters";
        toUnit = "feet";
    } else if (conversion === "meter to yard") {
        result = input_value * 1.09;
        fromUnit = "meters";
        toUnit = "yards";
    } else if (conversion === "kilometer to mile") {
        result = input_value * 0.62;
        fromUnit = "kilometers";
        toUnit = "miles";
    } else {
        document.getElementById("conversion-result").innerHTML = "Invalid conversion";
        return;
    }

    // write the final result to the output div
    document.getElementById("conversion-result").innerHTML =
        input_value + " " + fromUnit + " is " + result.toFixed(2) + " " + toUnit;
});
