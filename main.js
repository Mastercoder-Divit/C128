song = "";
leftWristX = "";
rightWristX = "";
leftWristY = "";
rightWristY = "";

function preload()
{
    song = loadSound("music.mp3");
}

function setup()
{
    canvas = createCanvas(500,450);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modalLoaded);
    poseNet.on('poses', gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);
    }
}

function modalLoaded()
{
    console.log('Posenet Is Initialized');
}

function draw()
{
    image(video,0,0,500,600);
}

function play()
{
    song.play;
    song.setVolume(1);
    song.rate(1);
}