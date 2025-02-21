document.addEventListener("DOMContentLoaded", function () {
    let loadingText = document.getElementById("loading-text");
    let mainContent = document.getElementById("main-content");
    let loadingScreen = document.getElementById("loading-screen");

    let count = 0;

    function updateLoading() {
        let increment = Math.floor(Math.random() * 8) + 1; // 1~8 사이 랜덤 증가량
        count += increment;

        if (count > 100) {
            count = 100;
        }

        loadingText.innerText = count + "%"; // 숫자 변경

        if (count < 100) {
            let delay = Math.random() * 120 + 50; // 랜덤한 속도로 숫자 올라감
            setTimeout(updateLoading, delay);
        } else {
            setTimeout(() => {
                loadingScreen.style.opacity = "0"; // 로딩 화면 페이드아웃
                setTimeout(() => {
                    loadingScreen.style.display = "none";
                    mainContent.classList.add("loaded"); // 메인 콘텐츠 등장
                }, 500);
            }, 500);
        }
    }

    updateLoading();
});
