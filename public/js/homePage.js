document.getElementById('input').addEventListener("click", displayText);

function displayText() {
    document.getElementById('output').innerHTML = document.getElementById('url').value;

}