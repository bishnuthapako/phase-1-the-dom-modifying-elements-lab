// Write your code here!

const element = document.getElementById("main");
element.remove();

const newHeader = document.createElement("h1");
newHeader.id = "victory"
document.body.appendChild(newHeader)
newHeader.innerHTML = '\'\'Bishnu \'is the champion\'';

// const newHeaderText = document.createTextNode('\'\'Bishnu \'is the champion\'')

// newHeader.appendChild(newHeaderText);

