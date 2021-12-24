var btn = document.querySelector("#btn-trans");
var output = document.querySelector("#output-box");
var input = document.querySelector("#text-area");
var serverURL = "https://api.funtranslations.com/translate/minion.json"
function getTransUrl(input)
{
    return serverURL + "?" + "text=" + input;
}
function clickEventHadler()
{
    var inputText= input.value;
    fetch(getTransUrl(inputText))
    .then(response => response.json())
    .then(json => 
        {
            var translatedText = json.contents.translated;
            output.innerText = translatedText;
        } )
    // console.log("me"+output.innerText);
}
btn.addEventListener("click", clickEventHadler)
