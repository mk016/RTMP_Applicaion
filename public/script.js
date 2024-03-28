const userVideo = document.getElementById('user-video')
const startButton = document.getElementById('Start-btn 3')
window.addEventListener('load', async e => {
     const media = await navigator
     .mediaDevices
     .getUserMedia({audio : true , video : true})
     userVideo.srcObject = media
})