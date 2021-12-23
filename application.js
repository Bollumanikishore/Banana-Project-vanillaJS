var btn = document.querySelector("#btn-trans");
var output = document.querySelector("#output-box");
var input = document.querySelector("#text-area");
function clickEventHadler()
{
    output.innerText = input.value;
    // console.log("me"+output.innerText);
}
btn.addEventListener("click", clickEventHadler)
