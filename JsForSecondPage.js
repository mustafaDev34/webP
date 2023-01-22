const correctText = document.getElementById('p');
correctText.textContent = localStorage.getItem('correctLetters');

const wrongText = document.getElementById('p1');
wrongText.textContent = localStorage.getItem('wrongLetters');

function goHomeButtonClicked(){
    
    window.location = "https://mustafadev34.github.io/webP/Main.html";
}
