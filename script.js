document.addEventListener("DOMContentLoaded", function () {
    let loadingText = document.getElementById("loading-text");
    let mainContent = document.getElementById("main-content");
    let loadingScreen = document.getElementById("loading-screen");

    let count = 0;
    function updateLoading() {
        count += Math.floor(Math.random() * 8) + 1;
        if (count > 100) count = 100;
        loadingText.innerText = count + "%";

        if (count < 100) {
            setTimeout(updateLoading, Math.random() * 120 + 50);
        } else {
            setTimeout(() => {
                loadingScreen.style.display = "none";
                mainContent.classList.add("loaded");
            }, 500);
        }
    }
    updateLoading();
});
