function load() {
var data = "1. " + document.getElementById("1").value + ", 2. " + document.getElementById("2").value + ", 3. " + document.getElementById("3").value + ", 4. " + document.getElementById("4").value + ", 5. " + document.getElementById("5").value + ", 6. " + document.getElementById("6").value + ", 7. " + document.getElementById("7").value + ", 8. " + document.getElementById("8").value;
navigator.clipboard.writeText(data);
  alert("Copied to clipboard!");
}

function help1() {
alert()
}

