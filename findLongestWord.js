window.onload = function() {
    const sentence = "The longest word in the world could yet to be created, no matter the language";
    const words = sentence.split(' ');
    let longestWord = '';
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > longestWord.length) {
        longestWord = words[i];
      }
    }
  
    console.log("The longest word in the sentence is:", longestWord);
  };
  