var canvas= new fabric.canvas('myCanvas');

block_height= "30";
block_width="30";

player_x="10";
player_y="10";

var player_object= "";

function player_update();{
    fabric.Image.fromUrl("player.png", function (Img){
        player_object= Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({

            top: player_y,
            left: player_x
        });

        canvas.add(player_object);
    })
}

function new_image(get_image){
    fabric.Image.fromUrl(get_image, function(Img){
        block_object= Img;
        block_object= scaleToWidth(block_width);
        block_object= scaleToHeight(block_height);
        block_object.set({
            top: player_y, left:player_x
        });
        canvas.add(block_object);
    });
}


window.addEventListener("keydown", my_keydown);
function my_keydown(e){
   
    key_pressed= e.keyCode;
    console.log(key_pressed);

    if (e.shiftKey== true && key_pressed == "80"){
        block_width= block_width + 10;
        block_height= block_height+ 10;
        document.getElementById("current_width").innerHTML= block_width;
        document.getElementById("current_height").innerHTML= block_height;
        console.log("p and shift pressed together");
    }

    if (e.shiftKey== true && key_pressed == "77"){
        block_width= block_width - 10;
        block_height= block_height- 10;
        document.getElementById("current_width").innerHTML= block_width;
        document.getElementById("current_height").innerHTML= block_height;
        console.log("shift and m pressed together");
    }

    if (key_pressed== "38"){
        Up();
        console.log("up");
    }

    if (key_pressed== "40");
    Down();
    console.log("down");
}

    if (key_pressed== "37"){
        Left();
        console.log("Left");
    }

    if (key_pressed== "39"){
        Right();
        console.log("right");
    }

    if (key_pressed == "70"){
        new_image("blackwidowface.jpg");
        console.log("f");
    }

    if (key_pressed == "66"){
        new_image("body.jpg");
        console.log("b");
    }

    if (key_pressed == "82"){
        new_image("right arm.png");
        console.log("r");
    }

    if (key_pressed== "72"){
        new_image("left arm.png");
        console.log("h");
    }

    if (key_pressed== "76"){
        new_image("legs.png");
        console.log("l");
    }

