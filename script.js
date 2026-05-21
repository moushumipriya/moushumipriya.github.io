<script src="js/script.js"></script>
const text = [
"AI Research Engineer",
"RLHF Researcher",
"NLP Enthusiast",
"Multi-Agent Systems Researcher"
];

let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type(){

if(count === text.length){
count = 0;
}

currentText = text[count];
letter = currentText.slice(0, ++index);

document.querySelector('.typing').textContent = letter;

if(letter.length === currentText.length){

count++;
index = 0;

}

setTimeout(type,150);

})();