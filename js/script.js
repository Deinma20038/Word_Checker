let textField = document.querySelector("#text");
let wordCount = document.querySelector("#wordCount");
let clear = document.querySelector("#clear");


function countWord(){
    let text = textField.value;
    text = text.trim();
    const words = text.split(" ");
    if(words[0] === ""){
        wordCount.textContent = 0;
    }else{
        wordCount.textContent = words.length;
    }
    
}


clear.onclick = () => {
    textField.value = "";
    countWord();
};
