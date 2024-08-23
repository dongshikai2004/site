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
// window.addEventListener('blur', function () {
//     document.getElementById('confirmationOverlay').style.visibility='visible';
// });

// 获取当前时间
var startTime = Date.now();
const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
// 更新时间显示
function updateTime() {
  var currentTime = Date.now();
  var timeElapsed = currentTime - startTime;
  var minutes = Math.floor(timeElapsed / 60000);
  var seconds = ((timeElapsed % 60000) / 1000).toFixed(0);

  // 如果秒数小于10，前面加0
  seconds = (seconds < 10 ? '0' : '') + seconds;
  document.querySelector('.month').textContent=monthNames[new Date().getMonth()];
  document.querySelector('.date').textContent=new Date().getDay();
  document.getElementById('timeSinceLoad').textContent = minutes + 'm ' + seconds + 's';
}

// 每秒更新时间
setInterval(updateTime, 1000);

// 页面加载完成后立即显示时间
updateTime();