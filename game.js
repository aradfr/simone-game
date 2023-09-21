var gamePattern = []; 
var userClickedPattern = [];
var buttonColors= ["red","blue", "green","yellow"];
var level = 0;
var clickStep = 1 ;

$(".btn").click(function(){clickHandler(this);});


if ( level === 0 ) {
    $(document).on("keypress",function() {nextSequence(); $(document).off("keypress");})
    
}



function clickHandler(clickedButton){
    var userChosenColor = $(clickedButton).attr("id");
    userClickedPattern.push(userChosenColor);
    if (userClickedPattern[clickStep - 1] !== gamePattern[clickStep - 1]) {
        gameOver();
    } else if (clickStep === gamePattern.length){
        nextSequence();
        clickStep = 1;
    } else {
        buttonAnimation(userChosenColor);
        clickStep++;
    }
}



function gameOver() {
    var sound = new Audio("sounds/wrong.mp3");
    $("body").addClass("game-over");
    setTimeout(function() { $("body").removeClass("game-over");},100);
    level = 0 ;
    $("h1").text("Press A Key to Start");
    $(document).on("keypress",function() {nextSequence(); $(document).off("keypress");})
    gamePattern = [];
    clickStep = 1 ;
    userClickedPattern = [];
}

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 3 ) ;
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    buttonAnimation(randomChosenColor);
    level++;
    $("h1").text("Level "+level);
    userClickedPattern = [];
}
function buttonAnimation (button ){
    var sound = new Audio("sounds"+"/"+button+".mp3");
    sound.play();
    $("."+ button).addClass("pressed");
    setTimeout(function() { $("."+ button).removeClass("pressed");},150);


}