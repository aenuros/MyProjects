let consonant = ["b","c","d",
"f","g","h","j","k","l","m",
"n","p","q","r","s","t","v",
"w","x","y","z"];

let vowel = ["a","e","i","o","u"];

var word = prompt("Enter a word.").toLowerCase();


firstLetter = word.substring(0,word.length);

endLetter = "";

console.log("You entered:" + firstLetter);

for (i = 0; i <= word.length; i++) {
  if (consonant.includes(firstLetter[i])) {
    endLetter += firstLetter[i];
    word = word.slice(1);
  }

  if(vowel.includes(firstLetter[i])) {
    console.log(word + endLetter + "ay");
    break;
  }

}
