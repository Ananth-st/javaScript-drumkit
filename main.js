// document.querySelector("button").addEventListener("click",handleClick);
// function handleClick(){
//     alert("i got clicked")
// }

// Anonymous function 
// switch
// this object
// EventListener
// audio link
// callback function
for( var i=0;i<document.querySelectorAll(".drum").length;i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    
    var buttonInnerHtml = this.innerHTML;

    makeSound(buttonInnerHtml); 
    buttonAnimation(buttonInnerHtml); 
});
}
document.addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key){
    switch (key) {
    case "w":
        var audio1 = new Audio("tom-2-85124.mp3 ");
        audio1.play();
      break;
    case "a":
        var audio2 = new Audio("midtom-95156.mp3 ");
        audio2.play();
      break;
    case "s":
        var audio3 = new Audio("low-floor-tom-level-2-106160.mp3 ");
        audio3.play();
      break;
    case "d":
        var audio4 = new Audio("midtom-95156.mp3 ");
        audio4.play();
      break;
    case "j":
        var audio5 = new Audio("snare-112754.mp3");
        audio5.play();
      break;
    case "k":
        var audio6 = new Audio("tom-2-85124.mp3 ");
        audio6.play();
      break;
    case "l":
        var audio7 = new Audio("tr909-kick-drum-241402.mp3 ");
        audio7.play();
      break;

    default:
        console.log(buttonInnerHtml)
        break;
}}

function buttonAnimation(keyPressed){
var activeButton = document.querySelector("."+keyPressed);
activeButton.classList.add("clicked");
setTimeout(() => {
    activeButton.classList.remove("clicked");
}, 70);

}
