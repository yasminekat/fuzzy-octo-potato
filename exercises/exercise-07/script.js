var verbs, nouns, adjectives, adverbs, preposition;
nouns = ["cat", "watch", "man", "glass", "elephant", "architect", "friend"];
verbs = ["ran", "sneezed", "coughed", "smiled", "frowned", "clapped", "said"];
adjectives = ["beautiful", "sick", "big", "cute", "hot", "hard", "rough"];
adverbs = ["slowly", "elegantly", "precisely", "quickly", "sadly", "humbly", "proudly"];
preposition = ["down", "into", "up", "on", "upon", "below", "above"];

function randGen() {
  return Math.floor(Math.random() * 5);
}

function sentence() {
  var rand1 = Math.floor(Math.random() * 7);
  var rand2 = Math.floor(Math.random() * 7);
  var rand3 = Math.floor(Math.random() * 7);
  var rand4 = Math.floor(Math.random() * 7);
  var rand5 = Math.floor(Math.random() * 7);
  var rand6 = Math.floor(Math.random() * 7);

  //                var randCol = [rand1,rand2,rand3,rand4,rand5];
  //                var i = randGen();
  
  var content = "The " + adjectives[rand1] + " " + nouns[rand2] + " " + adverbs[rand3] + " " + verbs[rand4] + " because some " + nouns[rand1] + " " + adverbs[rand1] + " " + verbs[rand1] + " " + preposition[rand1] + " a " + adjectives[rand2] + " " + nouns[rand5] + " which, became a " + adjectives[rand3] + ", " + adjectives[rand4] + " " + nouns[rand6] + ".";

  document.getElementById('sentence').innerHTML = "&quot;" + content + "&quot;";
};
sentence();