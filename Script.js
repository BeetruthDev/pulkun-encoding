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

const morseToLatin = {
  '.-': 'A',
  '-...': 'B',
  '-.-.': 'C',
  '-..': 'D',
  '.': 'E',
  '..-.': 'F',
  '--.': 'G',
  '....': 'H',
  '..': 'I',
  '.---': 'J',
  '-.-': 'K',
  '.-..': 'L',
  '--': 'M',
  '-.': 'N',
  '---': 'O',
  '.--.': 'P',
  '--.-': 'Q',
  '.-.': 'R',
  '...': 'S',
  '-': 'T',
  '..-': 'U',
  '...-': 'V',
  '.--': 'W',
  '-..-': 'X',
  '-.--': 'Y',
  '--..': 'Z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
  '.-.-.-': '.',
  '-..-.': '/',
  '--..--': ',',
  '..--..': '?',
  '.----.': "'",
  '-....-': '-',
  '-.--.': '(',
  '-.--.-': ')',
  '.-...': '&',
  '---...': ':',
  '-.-.-.': ';',
  '-...-': '=',
  '.-.-.': '+',
  '..--.-': '_',
  '.-..-.': '"',
  '...-..-': '$',
  '-.-.--': '!',
  '.--.-.': '@',
  '/': ' '
};

const allLatin = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const dotList = ["4", "7", "9"];
const dashList = ["0", "2", "3", "5", "6", "8"];

function encode(){
  // Get user input from the text area
  const userInput = document.getElementById('userInput').value;

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

  // Display the encoded output in the result area
  navigator.clipboard.writeText(pulkunEncoded)
  document.getElementById('result').innerText = pulkunEncoded;
}

function decodeMorse(morseCode) {
  const words = morseCode.trim().split(' / ');
  const decodedMessage = words.map(word => {
      const characters = word.split(' ');
      return characters.map(char => morseToLatin[char] || '').join('');
  });
  return decodedMessage.join(' ');
}

function decode() {
  const userInput = document.getElementById('userInput').value;

  let pulkunToMorse = "";
  for (let char of userInput) {
      if (dotList.includes(char)) {
          pulkunToMorse += ".";
      } else if (dashList.includes(char)) {
          pulkunToMorse += "-";
      } else if (allLatin.includes(char.toUpperCase())) {
          pulkunToMorse += "/";
      } else {
          pulkunToMorse += char;
      }
  }

  const morseToLatinDecoded = decodeMorse(pulkunToMorse);
  document.getElementById('result').innerText = morseToLatinDecoded;
}

// Add event listener to call perform from an HTML button
document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('encodeButton');
  if (button) {
      button.addEventListener('click', encode);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const decodeButton = document.getElementById('decodeButton');
  if (decodeButton) {
      decodeButton.addEventListener('click', decode);
  }
});