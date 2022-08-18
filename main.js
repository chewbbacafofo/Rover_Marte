canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

nasaImageArray=[
    "rover 1.jpg","rover 2.jpg","rover 3.jpg","rover 4.jpg"
]
randomNumber=Math.floor(Math.random()*4)

roverWidth=100;
roverHeight=90;
roverX=10;
roverY=10;

backgroundImage=nasaImageArray[randomNumber];
console.log("background image="+backgroundImage)
roverImage="rover.png";

function add(){
    backgroundImgTag=new Image();
    backgroundImgTag.onload=uploadBackground;
    backgroundImgTag.src=backgroundImage;

    roverImageTag=new Image();
    roverImageTag.onload=uploadRover;
    roverImageTag.src=roverImage;
}

function uploadBackground(){
    ctx.drawImage(backgroundImgTag,0,0,canvas.width,canvas.height);
}

function uploadRover(){
    ctx.drawImage(roverImageTag,roverX,roverY,roverWidth,roverHeight);
}

window.addEventListener("keydown",myKeyDown);

function myKeyDown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);

    if(keyPressed=='38'){
        console.log("cima");
        up();
    }

    if(keyPressed=='40'){
        console.log("baixo");
        down();
    }

    if(keyPressed=='37'){
        console.log("esquerda");
        left();
    }

    if(keyPressed=='39'){
        console.log("direita");
        right();
    }
}

function up(){
    if(roverY>=0){
        roverY=roverY-10;
        console.log("quando a seta pra cima for pressionada, x="+roverX+"|y="+roverY);
        uploadBackground();
        uploadRover();
    }
}

function down(){
    if(roverY<=500){
        roverY=roverY+10;
        console.log("quando a seta pra baixo for pressionada, x="+roverX+"|y="+roverY);
        uploadBackground();
        uploadRover();
    }
}

function left(){
    if(roverX>=0){
        roverX=roverX-10;
        console.log("quando a seta pra esquerda for pressionada, x="+roverX+"|y="+roverY);
        uploadBackground();
        uploadRover();
    }
}

function right(){
    if(roverX<=700){
        roverX=roverX+10;
        console.log("quando a seta pra direita for pressionada, x="+roverX+"|y="+roverY);
        uploadBackground();
        uploadRover();
    }
}