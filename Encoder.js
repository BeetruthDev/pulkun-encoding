const latinToMorse = {
  'A': '.-',  
  'B': '-...',  
  'C': '-.-.',
  'D': '-..',  
  'E': '.',  
  'F': '..-.',  
  'G': '--.',  
  'H': '....',  
  'I': '..',  
  'J': '.---',
  'K': '-.-',  
  'L': '.-..',  
  'M': '--',  
  'N': '-.',  
  'O': '---',  
  'P': '.--.',  
  'Q': '--.-',  
  'R': '.-.',  
  'S': '...',  
  'T': '-',  
  'U': '..-',  
  'V': '...-',  
  'W': '.--',  
  'X': '-..-',  
  'Y': '-.--',  
  'Z': '--..',  
  '1': '.----',  
  '2': '..---',  
  '3': '...--',  
  '4': '....-',  
  '5': '.....',  
  '6': '-....',  
  '7': '--...',  
  '8': '---..',  
  '9': '----.',  
  '0': '-----',
  '.': '.-.-.-',  
  '/': '-..-.',  
  ',': '--..--',  
  '?': '..--..',  
  "'": '.----.',  
  '-': '-....-',  
  '(': '-.--.',  
  ')': '-.--.-',  
  '&': '.-...',  
  ':': '---...',  
  ';': '-.-.-.',  
  '=': '-...-',  
  '+': '.-.-.',  
  '_': '..--.-',  
  '"': '.-..-.',  
  '$': '...-..-',  
  '!': '-.-.--',  
  '@': '.--.-.',
  ' ': '/'
};

const allLatin = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function perform() {
  // Get user input
  const userInput = prompt("Input the message to encode here:");

  // Initialise the morse string
  let morseEncoded = "";

  // Morse Encoding
  for (let char of userInput) {
      for (let letter in latinToMorse) {
          if (char.toLowerCase() === letter.toLowerCase()) {
              morseEncoded += latinToMorse[letter] + " ";
          }
      }
  }

  // Add new lines for easy differentiation between input and output
  console.log("");

  // Define what numbers dots and dashes translate to
  const dotList = ["4", "7", "9"];
  const dashList = ["0", "2", "3", "5", "6", "8"];

  // Initialise the pulkun output string
  let pulkunEncoded = "";

  // Add onto the pulkun string
  for (let char of morseEncoded) {
      if (char === ".") {
          pulkunEncoded += dotList[Math.floor(Math.random() * dotList.length)];
      } else if (char === "-") {
          pulkunEncoded += dashList[Math.floor(Math.random() * dashList.length)];
      } else if (char === "/") {
          pulkunEncoded += allLatin[Math.floor(Math.random() * allLatin.length)];
      } else {
          pulkunEncoded += char;
      }
  }

  alert.log(pulkunEncoded);
}

// Add event listener to call perform from an HTML button
document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('performButton');
  if (button) {
      button.addEventListener('click', perform);
  }
});