img1="";
status_1="";
img2="";
objects=[];

function setup(){
    canvas=createCanvas(600,450);
    canvas.center();
    object_detector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";

}

function preload(){
    img1=loadImage("dog_cat.jpg");
    img2=loadImage("05.png");

}



function modelLoaded(){
    console.log("modelLoaded");
    status_1=true;
    object_detector.detect(img1,gotResults);

}

function gotResults(error,results){
    if(error){
        console.log(error);
    }
        console.log(results);
        objects=results;
        console.log("object: "+objects);
    
}

function draw(){
     image(img1,0,0,600,450);
    //  fill("green");
    //  text("Dog",100,90);
    //  noFill();
    // stroke("green")
    // rect(90,80,220,350);
    // noFill();
    // fill("red");
    // text("Cat",340,110);
    // noFill();
    // stroke("red");
    // rect(290,90,220,350);
    console.log("object: "+objects);
    if(status_1 != ""){
        for(var i=0; i<objects.length; i++){
            document.getElementById("status").innerHTML="Status:object detected";
            fill("white");
            textSize(30);
            percentage=floor(objects[i].confidence*100);
            text(objects[i].label+" "+percentage+"%",objects[i].x,objects[i].y);

        }

    }
    
}