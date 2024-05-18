var audio = document.getElementById('background-audio');
    audio.addEventListener('ended', function() {
        audio.currentTime = 0;
        audio.play();
});

var loaded = false;

document.querySelector("#btn").onclick = function (){
    if (audio.paused) {
        audio.play();
    }
    $('#btn').hide();
    $('.loadingLove').fadeIn('slow', function() {
        setTimeout(function() {
            $('.loadingLove').fadeOut('fast', function() {
                loaded = true;
                updateBackground(media);
                $('.christmas').fadeIn('slow');
            });
        }, 5000);
    });
}

function updateBackground(media) {
    if (loaded) {
        if (media.matches) {
            $('body').css(
                {
                    "background-image": "url(/goodnight/assets/script/script.js)",
                    "background-repeat": "none",
                    "background-size": "100% 220px"
                }
            )
        } else {
            $('body').css(
                {
                    "background-image": "url(/goodnight/assets/script/script.js)",
                    "background-repeat": "none",
                    "background-size": "100% 100%"
                }
            )
        }
    }
}
  
var media = window.matchMedia("(max-width: 566px)");

media.addEventListener("change", function() {
    updateBackground(media);
});
