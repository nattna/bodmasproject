/*let countDownTime = 10;
const countDownElement = document.getElementById("countdown");
const interval = setInterval(function() {
    countDownTime--;j
    if (countDownTime <= 0) {
        clearInterval(interval);
        window.location.href = "competitiveGame_page3.html";
    }
}, 1000);*/



    let countdownTime = 10;
    const countdownElement = document.getElementById("countdown");

    const countdownTimer = setInterval(() => {
        countdownTime--;
        countdownElement.textContent = countdownTime;

        if (countdownTime <= 0) {
            clearInterval(countdownTimer);
            window.location.href = "competitiveGame_page3.html";
        }
    }, 1000);


document.addEventListener("DOMContentLoaded", function () {});