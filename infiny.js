var jq = document.createElement('script');
jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);

function sendMessage(text){
    $("#main > footer > div.copyable-area > div._2A8P4 > div > div.copyable-text.selectable-text").text(text)
    input = document.querySelector("#main > footer > div.copyable-area > div._2A8P4 > div > div.copyable-text.selectable-text");
    input.dispatchEvent(new Event('input', {bubbles: true}));
    var button = document.querySelector('#main > footer > div.copyable-area > div.EBaI7 > button');
    button.click();
}
