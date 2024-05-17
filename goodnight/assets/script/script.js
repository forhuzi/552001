var audio = document.getElementById('background-audio');
    audio.addEventListener('ended', function() {
        audio.currentTime = 0;
        audio.play();
});

document.querySelector("#btn").onclick = function (){
    if (audio.paused) {
        audio.play();
    }
    document.querySelector("#btn").style.display='none';
    document.querySelector(".christmas").style.display='block';
    // document.querySelector("#body").style.background="#de2f32";
}
