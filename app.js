const mainTweets = document.getElementById("mainTweets");

const enterTweets = document.getElementById("tweetForm");

enterTweets.addEventListener('submit', function(e){
    e.preventDefault();
    let newTweet = document.querySelector('#tweetInput');
    let newDiv = document.createElement('div');
    newDiv.innerText = newTweet.value;
    mainTweets.appendChild(newDiv);
    newTweet.value = '';
})