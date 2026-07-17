//https://www.youtube.com/watch?v=AkWWJ4DTmwY

const video = document.getElementsByTagName("video")[0];
const startTime = 62; // 62s = 1m 2s
const endTime = 92; // 92s = 1m 32s
if (video) {
    video.currentTime = startTime;
    video.play();
    video.addEventListener("timeupdate", () => {
        if (video.currentTime >= endTime) {
            video.currentTime = startTime;
            video.play();
        }
    }, false);
}