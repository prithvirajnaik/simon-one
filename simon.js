var color = ["one", "two", "three", "four"];
var gamePattern = [];
var userClickedPattern = [];
var counter = 0;
var level = 0;
var rules = "rekjakjr";
function gameClick() {
    level++;
    $("#title").text("level "+ level);
    var randNum = Math.floor(Math.random()*4); //
    gamePattern.push(color[randNum]);
    console.log("game pattern = "+ gamePattern);
    $("#"+color[randNum]).css("opacity",0.3);
    var sound = new Audio("sounds/"+color[randNum]+".mp3");
    sound.play();
    setTimeout(function() {
        $("#"+color[randNum]).css("opacity",1);
    }, 1000);
    userClickedPattern = [];
}

function userClick() {
    $(".btn").click(function(){
        var userChosenColor = $(this).attr("id");
        userClickedPattern.push(userChosenColor);
        console.log("user clicked pattern " + userClickedPattern);
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
        $("#title").text("Game Over, Try Again");
        $("#start-button").css("display", "inline-block");
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
$("#Rules").click(function() {
    $("#msg").toggle();
})
$("#start-button").click(function(){
    counter++;
    
    $("#start-button").css("display", "none");
    if(counter == 1){
        console.log("HHIiiiiiiiiii");
        gameClick();
    }  
});


