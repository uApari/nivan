function handleLeftButtonClick() {
    // Hide the buttons
    document.querySelectorAll('.lightsaber').forEach(button => {
      button.style.display = 'none';
    });
  
    // Display the fullscreen GIF
    const gifContainer = document.getElementById('gifContainer');
    const gifUrl = 'https://media.giphy.com/media/7slfwdWZOSH28/giphy.gif'; // Replace with the actual URL of your GIF
    const gifElement = document.createElement('img');
    gifElement.src = gifUrl;
    gifElement.alt = 'Star Wars GIF';
    gifElement.className = 'fullscreen-gif';
  
    // Add the GIF to the container
    gifContainer.innerHTML = '';
    gifContainer.appendChild(gifElement);
  
    // Add the 'show' class after a short delay to trigger the transition
    setTimeout(() => {
      gifElement.classList.add('show');
    }, 10);
  
    // Schedule hiding the GIF and changing the background image after a delay
    setTimeout(() => {
      gifElement.classList.remove('show');
  
      // Change the background image after the GIF dissolves
      document.body.style.backgroundImage = 'url(bg.gif)'; // Replace with the desired background image URL
  
      // Reset the container after the transition
      setTimeout(() => {
        gifContainer.innerHTML = '';
      }, 1000); // Adjust the delay to match the transition duration
    }, 3300); // Change the delay as needed (in milliseconds)
  }
  
  function handleRightButtonClick() {
    // Hide the buttons
    document.querySelectorAll('.lightsaber').forEach(button => {
      button.style.display = 'none';
    });
  
    // Display the fullscreen GIF
    const gifContainer = document.getElementById('gifContainer');
    const gifUrl = 'https://media.giphy.com/media/7slfwdWZOSH28/giphy.gif'; // Replace with the actual URL of your GIF
    const gifElement = document.createElement('img');
    gifElement.src = gifUrl;
    gifElement.alt = 'Star Wars GIF';
    gifElement.className = 'fullscreen-gif';
  
    // Add the GIF to the container
    gifContainer.innerHTML = '';
    gifContainer.appendChild(gifElement);
  
    // Add the 'show' class after a short delay to trigger the transition
    setTimeout(() => {
      gifElement.classList.add('show');
    }, 10);
  
    // Schedule hiding the GIF and changing the background image after a delay
    setTimeout(() => {
      gifElement.classList.remove('show');
  
      // Change the background image after the GIF dissolves
      document.body.style.backgroundImage = 'url(giphy.gif)'; // Replace with the desired background image URL
  
      // Reset the container after the transition
      setTimeout(() => {
        gifContainer.innerHTML = '';
      }, 1000); // Adjust the delay to match the transition duration
    }, 3300); // Change the delay as needed (in milliseconds)
  }
  function playLightSideSound() {
    var lightSideSound = document.getElementById("lightSideSound");
    lightSideSound.volume = 0.5;
    lightSideSound.play();
}

function playDarkSideSound() {
    var darkSideSound = document.getElementById("darkSideSound");
    darkSideSound.volume = 0.5;
    darkSideSound.play();
}

function playLightSideClick() {
    var lightSideClick = document.getElementById("lightSideClick");
    lightSideClick.volume = 0.5;
    lightSideClick.play();
}

function playDarkSideClick() {
    var darkSideClick = document.getElementById("darkSideClick");
    
    darkSideClick.volume = 0.5;
    darkSideClick.play();

    

    
}
