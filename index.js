$(document).keypress(level1);
$("h1").click(level1);
var i;
function level1()
{
    console.log("jsdhkl");
    i = 1;
    game();
}
function game(){
    var n = 0;
    $("h1").text("Level "+ i);
    $("body").removeClass("bodyFalse");
    var b = Math.floor(Math.random()*4)+1;
    console.log(b);
    switch (b){
        case 1:
            $("#b1").addClass("b1clicked");
            setTimeout(function(){
                $("#b1").removeClass("b1clicked");
            },500);
            break;
        case 2:
            $("#b2").addClass("b2clicked");
            setTimeout(function(){
                $("#b2").removeClass("b2clicked");
            },500);
            break;
        case 3:
            $("#b3").addClass("b3clicked");
            setTimeout(function(){
                $("#b3").removeClass("b3clicked");
            },500);
            break;
        case 4:
            $("#b4").addClass("b4clicked");
            setTimeout(function(){
                $("#b4").removeClass("b4clicked");
            },500);
            break;
        default:
            console.log("none of them");
            break;

    }
    var c=b;
    b = undefined;
    console.log("it was "+c);
    //check which button is clicked
    $("button").click(function () {
        if (this.id == "b"+c) {
            switch (c){
                case 1:
                    playSound("blue");
                    break;
                case 2:
                    playSound("yellow");
                    break;
                case 3:
                    playSound("green");
                    break;
                case 4:
                    playSound("red");
                    break;
                default:
                    playSound("red");
                    break;
        
            }
            $("body").addClass("bodyTrue");
            setTimeout(function(){
                $("body").removeClass("bodyTrue");
            },100);
            console.log("this is c"+c);
            c = undefined;
            n = 50;
            i++;
            game();
        }
        else {
            if(n!=50){
                $("body").addClass("bodyFalse");
                $("h1").text("You lost, press on title or any key to restart!");
                if($("h1").text()==="You lost, press on title or any key to restart!")
                {
                    playSound("wrong");
                }
                c = undefined;
                n=50;
            }
        }
    });
}
function playSound(name) {
    var audio = new Audio(name + ".mp3");
    audio.play();
}