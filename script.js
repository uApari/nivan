// Wait for a certain amount of time (e.g., 3000 milliseconds or 3 seconds)
setTimeout(function() {
    revealImage();
  }, 83000);
  
  function revealImage() {
    
    var img = document.getElementById("hiddenImage");
    var startTime;
    var duration = 500; // Duration of the reveal animation in milliseconds
  
    function animate(time) {
      if (!startTime) startTime = time;
      var progress = time - startTime;
      var opacityValue = progress / duration;
  
      if (opacityValue < 1) {
        img.style.opacity = opacityValue;
        requestAnimationFrame(animate);
      } else {
        img.style.opacity = 1;
      }
    }
  
    requestAnimationFrame(animate);
  }
  
  setTimeout(function() {
    var audio = document.getElementById("myAudio");
    
    audio.play();
  }, 1000);


  function playStarWarsTheme() {
      // Create an audio element
      const audio = new Audio('https://soundfxcenter.com/movies/star-wars/8d82b5_Star_Wars_Main_Theme_Song.mp3');

      // Start playing the audio in response to the button click
      audio.play();
  }