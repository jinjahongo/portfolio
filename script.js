document.addEventListener("DOMContentLoaded", function () {
    let loadingText = document.getElementById("loading-text");
    let mainContent = document.getElementById("main-content");
    let loadingScreen = document.getElementById("loading-screen");

    let count = 0;
    let interval = setInterval(() => {
        count++;
        loadingText.innerText = count + "%";

        if (count >= 100) {
            clearInterval(interval);
            loadingScreen.style.opacity = "0";
            setTimeout(() => {
                loadingScreen.style.display = "none";
                mainContent.classList.add("loaded"); // 페이지 등장 애니메이션 적용
            }, 500);
        }
    }, 20); // 숫자가 증가하는 속도 조절
});
