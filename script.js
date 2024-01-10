document.addEventListener('DOMContentLoaded', function () {
    // Function to change background color on button click
    function changeBackgroundColor() {
      const body = document.body;
      body.style.backgroundColor = getRandomColor();
    }
  
    // Function to generate a random color
    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  
    // Event listener for the button click
    const colorChangeButton = document.getElementById('colorChangeButton');
    if (colorChangeButton) {
      colorChangeButton.addEventListener('click', changeBackgroundColor);
    }
  });
  