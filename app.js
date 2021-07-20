const mainTweets = document.getElementById("mainTweets");
const enterTweets = document.getElementById("tweetForm");

//Create card with blockquote and author information for each tweet
let entry = function(newTweet){
    let p = document.createElement('p');
    p.innerText = newTweet.value;
    let footer = document.createElement('footer');
    footer.setAttribute("class", "blockquote-footer");
    //PLACEHOLDER FOR LOGIN NAME
    footer.innerText = "Author" 

    let newQuote = document.createElement('blockquote');
    newQuote.setAttribute("class", "blockquote mb-0");
    newQuote.appendChild(p);
    newQuote.appendChild(footer);

    let newCard = document.createElement('div');
    newCard.setAttribute("class", "card-body");
    newCard.appendChild(newQuote);

    let newDiv = document.createElement('div');
    newDiv.setAttribute("class", "card bg-dark");
    newDiv.appendChild(newCard);

    return newDiv;
}

enterTweets.addEventListener('submit', function(e){
    e.preventDefault();
    let newTweet = document.querySelector('#tweetInput');
    let newestEntry = entry(newTweet);

    mainTweets.prepend(newestEntry);

    //Reset the input box
    newTweet.value = '';
})