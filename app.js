const mainTweets = document.getElementById("mainTweets");
const enterTweets = document.getElementById("tweetForm");



enterTweets.addEventListener('submit', function(e){
    e.preventDefault();
    let newTweet = document.querySelector('#tweetInput');
    let newDiv = document.createElement('div');
    newDiv.setAttribute("class", "card bg-dark");
    let newCard = document.createElement('div');
    newCard.setAttribute("class", "card-body");
    let newQuote = document.createElement('blockquote');
    newQuote.setAttribute("class", "blockquote mb-0");
    let p = document.createElement('p');
    p.innerText = newTweet.value;
    let footer = document.createElement('footer');
    footer.setAttribute("class", "blockquote-footer");
    //PLACEHOLDER FOR LOGIN NAME
    footer.innerText = "AUTHOR" 
    newQuote.appendChild(p);
    newQuote.appendChild(footer);
    newCard.appendChild(newQuote);
    newDiv.appendChild(newCard);
    mainTweets.appendChild(newDiv);

    newTweet.value = '';
})

