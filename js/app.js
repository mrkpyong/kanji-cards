const term = document.querySelector('.term');
const definition = document.querySelector('.definition')
const checkButton = document.querySelector('.check')
const nextButton = document.querySelector('.next')

const lesson1 = [
    { One: "一"},
    { Two: "二" },
    { Three: "三"},
    { Four: "四"},
    { Five: "五"}
]
   

data = Object.entries(lesson1)

myArray = [1,2,3,4,5,"cat",7,87,9,0];


function getRandomWord() {
    // put the lesson into an array
    // for each value in the array
    // get a random word, then remove that word from the array
    //randomTerm = data[Math.floor(Math.random() * data.length)]
    word = Math.floor(Math.random() * data.length)
}

//seperation of concerns
updateHTML(word, definition) {
    // term.innerHTML = `<h3>${randomTerm[0]}</h3>`;
    // definition.innerHTML = `<h3>${randomTerm[1]}</h3>`;
    term.innerHTML = `<h3>${word}</h3>`;
    definition.innerHTML = `<h3>${randomTerm[1]}</h3>`;
}


checkButton.addEventListener('click', function() {
    definition.style.display = 'block';
});

nextButton.addEventListener('click', function() {
    definition.style.display = 'none';
    getRandomWord();
});



// const lesson1 = {
//     Hello: "Hallå",
//     Please: "Snälla",
//     Welcome: "Välkommen",
//     "You drink": "Du dricker",
//     "I eat": "Jag äter"
//   }
  
//   for (const [key, value] of Object.entries(lesson1)) {
//     console.log(`${key}: ${value}`);
//   }
  
//   const swedishCardArray = [
//     { English: "Hello", Swedish: "Hallå" },
//     { English: "Please", Swedish: "Snälla"},
//     { English: "Welcome", Swedish:"Välkommen"},
//     { English: "You drink", Swedish:"Du dricker"},
//     { English: "I eat", Swedish:"Jag äter"} 
//   ]
  
//   for (let i = 0; i < swedishCardArray.length; i++) {
//     console.log(swedishCardArray[i]);
//   }