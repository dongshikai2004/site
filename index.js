document.getElementById('confirmButton').addEventListener('click', function () {
    document.getElementById('confirmationOverlay').style.visibility='hidden';
});
document.addEventListener('DOMContentLoaded', function () {
    // 获取音乐元素和按钮
    const audioElement = document.getElementById('backgroundMusic');
    const playPauseButton = document.getElementById('playPauseButton');
    const bounce = document.getElementById('bounce');
    // 初始状态为播放
    let isPlaying = true;
    audioElement.play();
    // 添加事件监听器
    playPauseButton.addEventListener('click', function () {
        if (!isPlaying) {
            // 如果音乐没有播放，则开始播放
            audioElement.play();
            playPauseButton.textContent = '暂停';
            bounce.style.visibility = 'visible';
            isPlaying = true;
        } else {
            // 如果音乐正在播放，则暂停播放
            audioElement.pause();
            playPauseButton.textContent = '播放';
            bounce.style.visibility = 'hidden';
            isPlaying = false;
        }
    });

    // 处理确认按钮的点击事件
});
window.addEventListener('blur', function () {
    document.getElementById('confirmationOverlay').style.visibility='visible';
});
