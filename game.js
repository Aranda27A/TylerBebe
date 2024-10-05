
let buttonColors = ["red", "blue" ,"green" , "yellow"] 


let gamePattern =   []
let userClickedPattern = []

let level = 0
let started = false


$(document).keypress((event) => {

  if(event.key == "a"){  

             if (!started) {
            $("#level-title").text("Level " + level)
          }

          nextSequence()

          started = true
  }

})





$('.btn').click(function(){


    let  userChosenColor = $(this).attr("id")

    userClickedPattern.push(userChosenColor)
   
    playsound(userChosenColor)
    animatePress(userChosenColor)

    CheckAnswer(userClickedPattern.length -1)

})











function nextSequence() {

  userClickedPattern = []
  level++
  $("#level-title").text("Level " + level);


  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColors[randomNumber];
  gamePattern.push(randomChosenColour);


  
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

 playsound(randomChosenColour)



}


function CheckAnswer(currentlevel) {
  
  if(gamePattern[currentlevel]=== userClickedPattern[currentlevel]  ){
      
        console.log("success");
        if( userClickedPattern.length === gamePattern.length ){
          setTimeout(() => {
            nextSequence()
          }, 1000);

       }

  } else {

$('#level-title').text('Wrong, PRESS A TO RESTART');

    var WrongAudio = new Audio("sounds/wrong.mp3")
    WrongAudio.play()

    $('body').addClass('game-over');
    
    setTimeout(() => {
      $('body').removeClass('game-over');
      
    }, 200);

    startOver()
  }


}



function animatePress(currentcolor){
  $("#"+ currentcolor).addClass('pressed')

  setTimeout(function () {
      $("#" + currentcolor).removeClass("pressed");
    }, 100);


    

  }


function playsound(name) {

  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;}