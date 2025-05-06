const messages = document.getElementById('messages');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send');
const titleText = document.getElementById('welcome');

let firstMessageSent = false;






function appendMessage(text, sender) {
  const msgEl = document.createElement('div');
  msgEl.classList.add('message', sender);

  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  bubble.textContent = text;

  msgEl.appendChild(bubble);
  messages.appendChild(msgEl);
  messages.scrollTop = messages.scrollHeight;
}


function processRequest() {
  const text = userInput.value.trim();
  if (!text) return;

  if (!firstMessageSent) {
    titleText.style.display = 'none';
    firstMessageSent = true;
  }

  appendMessage(text, 'user');
  userInput.value = '';

 
      
    let bbcWeight = 0;
    let directionWeight = 0;
    let greetingWeight = 0;

    const new_text = text.toLowerCase();

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

    if (new_text.includes("crumpets and gravy")) {
      var botResponse = "you're a boxo";
    } else {
      for (const word of new_text.split(" ")) {
        if (greetings.includes(word)) {
          greetingWeight += 1;
        } else if (classrooms.includes(word)) {
          directionRoom = word;
          directionWeight += 1;
        }
      }

      
      if (bbcWeight >= 2) {
        console.log("wtf");
      } else if (directionWeight >= 1) {
        var botResponse = `room: ${directionRoom}`;
      }
        else if (greetingWeight >= 1) {
        var botResponse = "Hello!";
      } else {
        var botResponse = "I'm not sure I understand.";
      }

    }
    


    

    
    appendMessage(botResponse, 'bot');

}

sendButton.addEventListener('click', processRequest);
userInput.addEventListener('keypress', keypress => {
  if (keypress.key === 'Enter') processRequest();
});
