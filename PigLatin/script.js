
function pigLatin(sentence) {
  let consonant = ["b","c","d",
  "f","g","h","j","k","l","m",
  "n","p","q","r","s","t","v",
  "w","x","y","z"];

  let vowel = ["a","e","i","o","u"];

  sentence = sentence.toLowerCase();

  let wordArray = sentence.split(" ");

  finalSentence = [];

  for (i = 0; i < wordArray.length; i++) {
    newWord = wordArray[i];
    endLetter ="";
    firstLetter = newWord.substring(0,newWord.length);

    finalWord = newWord;


      for (j = 0; j <= newWord.length; j++) {



        if (consonant.includes(firstLetter[j])) {

          endLetter += firstLetter[j];
          finalWord = finalWord.slice(1);

          }

        if(vowel.includes(firstLetter[j])) {
          finalSentence[i] = finalWord + endLetter + "ay";
          break;
          }

      }
   }

  return(finalSentence.join(" "));
}


function myFunction() {
  let input = document.getElementById("input").value;
  document.getElementById("output").value = pigLatin(input);
}
