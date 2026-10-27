document.getElementById("calculator-form").addEventListener("submit", function (event) {
    event.preventDefault();

    let a = Number(document.getElementById("number1").value);
    let b = Number(document.getElementById("number2").value);
    let op = document.getElementById("operation").value;
    let result;

    if (op === "add") {
        result = a + b;
    } else if (op === "subtract") {
        result = a - b;
    } else if (op === "multiply") {
        result = a * b;
    } else if (op === "divide") {
        result = b === 0 ? "Cannot divide by zero" : a / b;
    }

    document.getElementById("result").textContent = result;
});
