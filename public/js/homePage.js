document.getElementById('input').addEventListener("click", displayText);

function displayText() {
    document.getElementById('output').innerHTML = document.getElementById('url').value;
    //const $ = cheerio.load('<h2 class="title">Hello world</h2>')
}