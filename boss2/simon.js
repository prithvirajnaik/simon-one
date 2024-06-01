var color = ["one", "two", "three", "four"];
var gamePattern = [];//to store game set random color order
var userClickedPattern = [];// to store user click resets each round
 // to control the fast execution of the functions
var counter = 0;
var level = 0;

function gameClick() {
        level++;
        $("#title").text("level "+ level);
        var randNum = Math.floor(Math.random()*4); //
        gamePattern.push(color[randNum]);
        console.log("game pattern = "+ gamePattern);
        $("#"+color[randNum]).css("opacity",0.3);
        setTimeout(function() {
            $("#"+color[randNum]).css("opacity",1);
        }, 1000);
        userClickedPattern = [];
        var sound = new Audio("sounds/"+color[randNum]+".mp3");
        sound.play();
}


function userClick() {

    $(".btn").click(function(){
        var userChosenColor = $(this).attr("id");
        userClickedPattern.push(userChosenColor);
        console.log("user clicked pattern " + userClickedPattern);
      // playSound(userChosenColor);
        animatePress(userChosenColor);
        checkAnswer(userClickedPattern.length-1);
    });
}
function  checkAnswer(answer){
    if(gamePattern[answer] === userClickedPattern[answer]){
        console.log("correct");
        if(userClickedPattern.length === gamePattern.length){     
            setTimeout(function() {
                gameClick();
            }, 1000);
        }
    }
    else{
        console.log("wrong");
        var sound = new Audio("sounds/wrong.mp3");
        sound.play();
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);
        $("#title").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}
function startOver() {
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
    counter = 0;

}
function animatePress(choice) {
    $("#" + choice).addClass("pressed");
    setTimeout(function() {
        $("#" + choice).removeClass("pressed");
    }, 200);
    var sound = new Audio("sounds/"+choice+".mp3");
    sound.play();
}
userClick();
document.addEventListener("keydown", function() {
    counter++;
    if(counter == 1){
        console.log("HHIiiiiiiiiii");
        gameClick();
    }  
});    


// function start() {
//     if (gamePattern.length > userClickedPattern.length){ 
//         userClick();
//     }else if (gamePattern.length == userClickedPattern.length){
//         gameClick();
//     }
    
// }

