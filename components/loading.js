var progress = document.querySelector(".progress");
var percent = document.querySelector(".percent");
var textBox = document.querySelector(".textBox");
var button = document.querySelector(".button");
var textBtn = document.querySelector(".textBtn");
var heartBox = document.querySelector(".heartBox");
var cursor = document.querySelector(".buttonCLick img"); 
var heartItem1 = document.querySelector(".heartItem.item1")
var heartItem2 = document.querySelector(".heartItem.item2")
var heartItem3 = document.querySelector(".heartItem.item3")
var heartItem4 = document.querySelector(".heartItem.item4")
var heartItem5 = document.querySelector(".heartItem.item5")
var heartItem6 = document.querySelector(".heartItem.item6")
var heartItem7 = document.querySelector(".heartItem.item7")
var heartItem8 = document.querySelector(".heartItem.item8")
var count = 0;
var percentWidth = 0;
var heartLeft = -3.2;
var progressLoad = setInterval(progressInterva,100)

button.addEventListener("click", function(){
    button.style.transform = "scale(0.8)";
    setTimeout(()=>{
        button.style.transform = "scale(1)";
        window.location.href = "./happybirthday/"
    },200)
})

button.addEventListener("mouseenter", function() {
    button.style.backgroundColor = "rgb(244,118,121)"; // Change the background color on hover
});

button.addEventListener("mouseleave", function() {
    button.style.backgroundColor = "rgb(255,89,199)"; // Revert the background color when the mouse leaves
});

function progressInterva(){
    if(count == 100 && percentWidth == 100){
        clearInterval(progressLoad)
        percent.textContent = "DONE";
        percent.style.letterSpacing = "1px";
        textBox.style.transform = "scale(1.3)"
        heartItem8.style.animation = "1s heartScale forwards"
        setTimeout(()=>{
            textBox.style.transform = "scale(0)";
        },400)
        setTimeout(()=>{
            textBox.style.opacity = "0";
        },600)
        setTimeout(()=>{
            button.style.transform= "scale(1)";
        },800);
        setTimeout(()=>{
            button.style.background = "rgb(255,89,199)"
            button.style.width = "150px";
            button.style.borderRadius = "20px"
        },1500)
        setTimeout(()=>{
            button.style.height = "40px";
        },2000)
        setTimeout(()=>{
            textBtn.textContent = "CLICK HERE"
        },2500)
        setTimeout(()=>{
            cursor.style.opacity = "1";
        },3000)
    }
    else{
        if(count == 2){
            heartItem1.style.animation = "1s heartScale forwards"
        }
        if(count == 15){
            heartItem2.style.animation = "1s heartScale forwards"
        }
        if(count == 29){
            heartItem3.style.animation = "1s heartScale forwards"
        }
        if(count == 44){
            heartItem4.style.animation = "1s heartScale forwards"
        }
        if(count == 57){
            heartItem5.style.animation = "1s heartScale forwards"
        }
        if(count == 72){
            heartItem6.style.animation = "1s heartScale forwards"
        }
        if(count == 86){
            heartItem7.style.animation = "1s heartScale forwards"
        }
        count += 1;
        percentWidth += 1;
        heartLeft += 0.968;
        progress.style.width = percentWidth + '%'
        percent.innerText = count + '%'
        heartBox.style.left = heartLeft + '%'
    }
}