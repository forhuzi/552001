//js script for main page
$(window).on('load', function(event){
    $('body').removeClass('preloading');
    $('.loadingLove').delay(1000).fadeOut('fast');        
    function getHeart(e){
        let ele = document.createElement("div");
        ele.className = "element"
        document.querySelector("body").prepend(ele)
        ele.style.left = e.clientX + 'px';
        ele.style.top = e.clientY -10 +'px';
        setTimeout(()=>{
            let text = document.querySelectorAll(".element")[0],
            directionX = Math.random() < .5 ? -1 : 1,
            directionY = Math.random() < .5 ? -1 : 1

            text.style.left = parseInt(text.style.left) - (directionX * (Math.random() * 100)) + 'px';
            text.style.top = parseInt(text.style.top) - (directionY * (Math.random() * 100)) + 'px';
            text.style.opacity = 0;
            text.style.transform = 'scale(0.4)'
            text.innerHTML = "💕"
            text.style.zIndex = "100"

            setTimeout(()=>{
                ele.remove()
            },1000)
        },10)
    }
    document.onmousemove = function(e){
        getHeart(e)
    }
    document.onclick = function(e){
        let ele = document.createElement("div");
        ele.className = "heartRain"
        document.querySelector("body").prepend(ele);
        ele.style.left = e.clientX -10 + 'px';
        ele.style.top = e.clientY -10 +'px';
        ele.innerHTML = "💕";
        setTimeout(()=>{
            ele.style.top = "calc(85% - 25px)"
        },100)
        setTimeout(()=>{
            ele.style.opacity = 0
        },10000)
        setTimeout(()=>{
            ele.remove()
        },11000)
    }
    document.onmousedown = (e)=>{
        getHeart(e)
    }

    const inputField = document.getElementById('inputField');
    const textToType = "hudihama";
    const typingSpeed = 100; // milliseconds per character

    let charIndex = 0;
    function typeText() {
        if (charIndex < textToType.length) {
            inputField.value += textToType.charAt(charIndex);
            charIndex++;
            setTimeout(typeText, typingSpeed);
        }
        if(inputField.value.length == textToType.length){
            setTimeout(()=>{
                document.querySelector(".buttonLove").style.transform = "translateY(0%)";
                document.querySelector(".cricleBtn").style.transform = "scale(0.1)"
            },1000)
            setTimeout(()=>{
                document.querySelector(".cricleBtn").style.transform = "scale(1)"                
                // Create an img element
                var imgElement = document.createElement("img");
                imgElement.src = "../../assets/img/letternofication.gif";
                imgElement.width = 40; // Replace with the desired width in pixels
                imgElement.height = 40; // Replace with the desired height in pixels
                document.querySelector(".cricleBtn").innerHTML = ""
                document.querySelector(".cricleBtn").appendChild(imgElement)
            },2000)
            setTimeout(()=>{
                document.querySelector(".buttonLove").style.width = "230px"
                document.querySelector(".buttonLove").style.height = "50px"
                document.querySelector(".button").style.transform = "translateX(25px)"
            },2500)
            setTimeout(()=>{
                document.querySelector(".button").style.width = "calc(100% - 25px)"
                document.querySelector(".button").style.height = "10px"
            },3000)
            setTimeout(()=>{
                document.querySelector(".button").style.height = "30px"
            },3500)
            setTimeout(()=>{
                document.querySelector(".button").innerHTML = "YOU HAVE NEW MESSAGE"
                //document.getElementById()
            },4000)
        }
    }

    setTimeout(()=>{
        typeText();
    }, 11500)
});

// .textLetter text h2
let indexText = 0;
let textLetter = document.querySelector('.textLetter h2');
const textLetterH2 = "Thân gửi hudihama!";
let timoutTextLetter;

function textCharLetter(){
    if (indexText < textLetterH2.length) {
        textLetter.textContent += textLetterH2[indexText];
        indexText++;
        setTimeout(indexText, 100);
    }
    else{
        clearInterval(timoutTextLetter);
        setTimeout(()=>{
            funcTimeoutLetterContent()
        },500)
    }
}
function funcTimeoutLetter(){
    indexText = 0; // Reset indexText
    textLetter.textContent = ''; // Xóa nội dung hiện tại của textLetter
    clearInterval(timoutTextLetter);
    timoutTextLetter =  setInterval(()=>{
            textCharLetter();
        }, 200)
}

// chữ của thư muốn gửi
let indexTextContent = 0;
let textLetterContent = document.querySelector('.contentLetter');
const textLetterP = "Chúc mừng sinh nhật lần thứ 23 của bạn!!! Hôm nay là một ngày đặc biệt, ngày một thiên thần nhỏ đáng yêu được sinh ra đời. Nhân dịp này tôi muốn gửi đến bạn những lời chúc sinh nhật thật ý nghĩa và ấm áp nhất.\n    Trước tiên, tôi chúc bạn tuổi mới luôn luôn xinh đẹp đáng yêu như bây giờ nha.\n Tôi chúc bạn luôn có được thật nhiều niềm vui và hạnh phúc, chúc bạn luôn gặp được những điều tốt đẹp nhất trong cuộc sống. Chúc bạn luôn may mắn với những lựa chọn của mình. Dù thế nào thì đối với tôi bạn vẫn luôn là người giỏi nhất. Tôi hi vọng bạn sẽ đón nhận món quà này của tôi một cách vui vẻ và thoải mái.\nChúc mừng sinh nhật một lần nữa! Mong rằng ngày hôm nay sẽ đáng nhớ và đánh dấu một năm tuyệt vời tiếp theo trong cuộc đời của bạn.\nChúc bạn luôn xinh đẹp, hạnh phúc, thành công và luôn nhận được những điều tốt đẹp nhất!\n"
let timoutTextLetterContent;
function textCharLetterContent(){
    if (indexTextContent < textLetterP.length) {
        textLetterContent.textContent += textLetterP[indexTextContent];
        indexTextContent++;
        setTimeout(indexTextContent, 100);
    }
    else{
        clearInterval(timoutTextLetterContent)
    }
}
function funcTimeoutLetterContent(){
    indexTextContent = 0; // Reset indexTextContent
    textLetterContent.textContent = ''; // Xóa nội dung hiện tại của textLetter
    clearInterval(timoutTextLetterContent);
    timoutTextLetterContent =  setInterval(()=>{
        textCharLetterContent();
        }, 100)
}
//end 
document.querySelector(".boxSlider .right").addEventListener("click", function(){
    var slider = document.querySelectorAll(".slider")
    document.querySelector(".listSlider").appendChild(slider[0])
})
document.querySelector(".boxSlider .left").addEventListener("click", function(){
    var slider = document.querySelectorAll(".slider")
    document.querySelector(".listSlider").prepend(slider[slider.length -1])
})

document.querySelector(".cricleBtn").addEventListener("click", function(){
    let timeout = setInterval(()=>{
        var letters = document.createElement("div");
        letters.className = "letters"
        letters.innerHTML = '<img src="../../assets/img/letters.png" alt="">';
        document.querySelector("body").prepend(letters)
        let left = Math.floor(Math.random() * 100);
        let rotate = Math.floor(Math.random() * 360);
        letters.style.left = left + "%";
        letters.style.top = "-10%";
        letters.style.transform = `rotate(${rotate}deg)`;
        setTimeout(()=>{
            letters.style.top = "100%";
        },1000)
        setTimeout(()=>{
            letters.remove()
        },11000)
        document.querySelectorAll(".letters").forEach((item)=>{
            item.addEventListener("click", function(){
                clearInterval(timeout)
                $(".wrapperLetterForm").fadeIn()
                funcTimeoutLetter();                
            })
        })
    },500)
})

document.querySelector(".fa-xmark").addEventListener("click", function(){
    indexTextContent = 0; // Reset indexTextContent
    textLetterContent.textContent = ''; // Xóa nội dung hiện tại của textLetter
    clearInterval(timoutTextLetterContent)
    $(".wrapperLetterForm").fadeOut()
})
// Get a reference to the audio element
const audio = document.getElementById('backgroundAudio');

// Check if the audio is enabled or disabled in the local storage
const isAudioEnabled = localStorage.getItem('isAudioEnabled') !== 'false';

// Function to toggle audio
function toggleAudio() {
    if (isAudioEnabled) {
        audio.pause();
    } else {
        audio.play();
    }
    localStorage.setItem('isAudioEnabled', !isAudioEnabled);
}

// Initialize audio state
if (isAudioEnabled) {
    audio.play(); // Start audio if it was enabled
}
