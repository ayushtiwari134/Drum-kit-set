const music=["sounds/tom-1.mp3","sounds/tom-2.mp3","sounds/tom-3.mp3","sounds/tom-4.mp3","sounds/crash.mp3","sounds/kick-bass.mp3","sounds/snare.mp3"];
const letters= ["w","a","s","d","j","k","l"];
for (var i=0;i<document.querySelectorAll("button").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        playAudio(this.innerHTML);
    });
}

document.addEventListener("keypress",function(event){
    playAudio(event.key);
    buttonAnimation(event.key);
})


var audio;

function buttonAnimation(str){
    document.querySelector("."+str).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+str).classList.remove("pressed");
    },100);
}

function playAudio(str){
    for (var i=0; i<letters.length;i++){
        if (str===letters[i]){
            audio= new Audio(music[i]);
            audio.play();
        }
    }
}
