const videoElement = document.getElementById('backgroundVideo');

// List of video files
const videoSources = [

  'video/Blog_video.mp4'
];

let currentVideoIndex = 0;

videoElement.addEventListener('ended', () => {
  // Move to next video
  currentVideoIndex = (currentVideoIndex + 1) % videoSources.length;
  videoElement.src = videoSources[currentVideoIndex];
  videoElement.play();
});


