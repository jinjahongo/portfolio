document.addEventListener("DOMContentLoaded", function () {
    let loadingText = document.getElementById("loading-text");
    let mainContent = document.getElementById("main-content");
    let loadingScreen = document.getElementById("loading-screen");

    let count = 0;
    
    function updateLoading() {
        let increment = Math.floor(Math.random() * 10) + 1; // 1~10 사이 랜덤 증가량
        count += increment;

        if (count > 100) {
            count = 100;
        }

        // 슬롯머신 느낌을 위한 애니메이션
        loadingText.style.transform = "rotateX(90deg)";
        setTimeout(() => {
            loadingText.innerText = count + "%";
            loadingText.style.transform = "rotateX(0deg)";
        }, 100); // 짧은 딜레이로 회전 효과

        if (count < 100) {
            let delay = Math.random() * 150 + 50; // 랜덤한 속도로 숫자 올라감
            setTimeout(updateLoading, delay);
        } else {
            setTimeout(() => {
                loadingScreen.style.opacity = "0";
                setTimeout(() => {
                    loadingScreen.style.display = "none";
                    mainContent.classList.add("loaded"); // 페이지 등장 애니메이션 적용
                }, 500);
            }, 500);
        }
    }

    updateLoading();
});
