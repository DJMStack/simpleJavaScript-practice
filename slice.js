// var tweet = prompt('Enter your tweet');
// // var tweetCount = tweet.length;
// // alert("You have written " + tweetCount + " characyers, you have" + (140 - tweetCount) + " remaining");

// var name = "Angela";
// name.slice(0,3);

// var tweet = prompt('Enter your tweet');
// var tweetCount = tweet.length;
// // alert("You have written " + tweetCount + " characyers, you have" + (10 - tweetCount) + " remaining");
// alert(tweet.slice(0,5));

var tweet = prompt('Enter your tweet');
var tweetUnder140 = tweet.slice(0,140);
alert(tweetUnder140);

//Or

tweet = prompt('Enter your tweet').slice(0,140);