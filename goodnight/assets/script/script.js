var audio = document.getElementById('background-audio');
    audio.addEventListener('ended', function() {
        audio.currentTime = 0;
        audio.play();
});

document.querySelector("#btn").onclick = function (){
    if (audio.paused) {
        audio.play();
    }
    $('#btn').hide();
    $('.loadingLove').fadeIn('slow', function() {
        setTimeout(function() {
            $('.loadingLove').fadeOut('fast', function() {
                updateBackground(media);
                $('.christmas').fadeIn('slow');
            });
        }, 2000);
    });
}

function updateBackground(media) {
    if (media.matches) {
        $('body').css(
            {
                "background-image": "url(../assets/img/nightSky.jpg)",
                "background-repeat": "none",
                "background-size": "100% 220px"
            }
        )
    } else {
        $('body').css(
            {
                "background-image": "url(../assets/img/nightSky.jpg)",
                "background-repeat": "none",
                "background-size": "100% 100%"
            }
        )
    }
}
  
var media = window.matchMedia("(max-width: 480px)");

media.addEventListener("change", function() {
    updateBackground(media);
});