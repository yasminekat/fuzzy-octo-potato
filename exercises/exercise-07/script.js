let array_one = [
    "a house of wood",
    "a house of brick",
    "a house of broken dishes",
    "a house of discarded clothing",
    "a house of dust"
  ];

  let array_two = [
    "among other houses",
    "among small hills",
    "among high montains",
    "by a river",
    "by an abandoned lake"
  ];

  function renderPoem(){
      //0. grab the poem div 
      let poem = document.querySelector(".poem");

      //1.grab random element from array 1 
      let element_from_array_one = array_one[Math.floor(Math.random()*array_one.length)];

      //2. grab ramdom element from array 2
      let element_from_array_two = array_two[Math.floor(Math.random()*array_two.length)];

      //3. create a new paragraph element 
      let paragraph = document.createElement("p");

      //4.append the paragraph to the the poem div
  }

  let btn = document.querySelector("button");
  btn.addEventListener("click", renderPoem)


  //* console.log('it works') min

 var verbs, nouns, adjectives;

 nouns = ["heart", "rainbow", "ocean"];
 verbs = ["look", "make", "continue"];
 adjectives = ["good", "different", "possible"];
 
 function randomGen(){
     return Math.floor(Math.random() * 3);
 }
 
 function sentence() {
     
 var noun, verb, adjective, text;
 
 noun = nouns[Math.floor(Math.random() * nouns.length)];
 verb = verbs[Math.floor(Math.random() * verbs.length)];
 adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
 
 text = `My ${noun} leaps ${adjectives} when I ${verb} a rainbow in the sky.`;
 
 document.getElementById('sentence').innerHTML = text;
 
 }
 console.log(sentence);
 sentence(); //*