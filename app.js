var msg = document.getElementsByClassName("msg")[0];
maxChar = 140;
maxCharWarn = 20;


function counter() {
    charLeftLabel = "char-left";
    charLeft = document.getElementsByClassName(charLeftLabel)[0];
    msg.onkeydown = function(){
    setTimeout(function(){
    charLeft.innerHTML = maxChar - msg.value.length;
    charLeft.className = charLeftLabel + warnLabel;
          }, 1); 
        };
}

function funcTweetar() {
    var containerBox = document.createElement("div");
    var tweetPublished = document.createElement("p");
    var feedTweets = document.getElementsByClassName("tweet")[0];
    tweetPublished.textContent = msg.value;
    containerBox.classList.add("tweet-box");
    tweetPublished.classList.add("tweetPublished");
    containerBox.appendChild(tweetPublished);
    feedTweets.appendChild(containerBox);
    document.getElementById(areaText).innerHTML=""; 
}