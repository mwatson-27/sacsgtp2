//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export

const greetings = ["hello", "hi", "hey", "greetings", "salutations"];

const randomMessages = ["boxo alert", "crumpets and gravy", "pro durham propaganda", "_Hutspot", "I <3 TfNSW", "Please sign in to Edumate"]

const bbcTrigger = ["bbc", "passcode", "password", "code"]

const classrooms = [
    "sg11", 
    "library",
    "s421", "s423", "s424", "s425", "s426", "s427", "s436","s437", "s438", "s439",
    "s512", "s538", 
    "s520", "s521", "s522", "s523", "s524",
    "s531", "s532","s533", 
    "s801", "s810", "s815", "s817", 
    "s838", "s839", "s840", "s841", 
    "blg02", "blg03", "blg04", "blg05", "blg06", "blg07", "blg08", 
    "bg18", "bg19", "bg20", 
    "b101", "b102", "b103", "b120", 
    "b125", "b127", "b131", "b132",
    "b201", "b202", "b203", "b204", "b205", "b206", "b207", "b208", "b209",
    "b301", "b302", "b303", "b304", "b305", 
    "b401", "b403", "b404", "b405", "b406", "b407", "b408", "b409", "b410", "b411", "b412", "b413",
    "gym", "fairfax", "gymnasium", "heath", "bbc", "health", "office", "it", "cathedral", "chapter"]

const randomText = document.getElementById('random-message');

let messageOfTheDay = Math.floor(Math.random() * randomMessages.length)
console.log(messageOfTheDay)
randomText.textContent = randomMessages[messageOfTheDay]