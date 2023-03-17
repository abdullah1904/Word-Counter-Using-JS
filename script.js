var text = document.getElementById("text");
var btn = document.getElementById("button");
var letter = document.getElementById("letter");
var words = document.getElementById("words");
var sentences = document.getElementById("sentences");
btn.addEventListener("click", ()=>{
    var letterl = 0;
    var wordl = 1;
    var sentencel = 0;
    let string = text.value;
    let arrayl = string.split("");
    for (let i = 1; i <= arrayl.length; i++) {
        if (arrayl[i] == " "){
            wordl++;
            continue;
        }
        else if(arrayl[i] == "."){
            sentencel++;
            continue;
        }
        else {
            letterl++;
        }
    }
    letter.innerText = letterl;
    words.innerText = wordl;
    sentences.innerText = sentencel;
});