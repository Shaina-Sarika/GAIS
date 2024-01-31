document.addEventListener('DOMContentLoaded', function() {
    const targetNumber = 5000;
    const countElement = document.getElementById('count1');
    // Function to animate counting from 0 to targetNumber
    function animateCount() {
      let currentNumber = 0;
      const interval = 10; // milliseconds
      const step = Math.ceil(targetNumber / (2000 / interval));
      const countInterval = setInterval(function() {
        currentNumber += step;
        countElement.textContent = currentNumber;
  
        if (currentNumber >= targetNumber) {
          countElement.textContent = targetNumber;
          clearInterval(countInterval);
        }
      }, interval);
    }
    // Call the function to start the counting animation
    animateCount();
  });
  



  document.addEventListener('DOMContentLoaded', function() {
    const targetNumber = 10000;
    const countElement = document.getElementById('count2');
    // Function to animate counting from 0 to targetNumber
    function animateCount() {
      let currentNumber = 0;
      const interval = 10; // milliseconds
      const step = Math.ceil(targetNumber / (2000 / interval));
      const countInterval = setInterval(function() {
        currentNumber += step;
        countElement.textContent = currentNumber;
  
        if (currentNumber >= targetNumber) {
          countElement.textContent = targetNumber;
          clearInterval(countInterval);
        }
      }, interval);
    }
    // Call the function to start the counting animation
    animateCount();
  });
  



  document.addEventListener('DOMContentLoaded', function() {
    const targetNumber = 100;
    const countElement = document.getElementById('count3');
    // Function to animate counting from 0 to targetNumber
    function animateCount() {
      let currentNumber = 0;
      const interval = 10; // milliseconds
      const step = Math.ceil(targetNumber / (2000 / interval));
      const countInterval = setInterval(function() {
        currentNumber += step;
        countElement.textContent = currentNumber;
  
        if (currentNumber >= targetNumber) {
          countElement.textContent = targetNumber;
          clearInterval(countInterval);
        }
      }, interval);
    }
    // Call the function to start the counting animation
    animateCount();
  });
  



  document.addEventListener('DOMContentLoaded', function() {
    const targetNumber = 200;
    const countElement = document.getElementById('count4');
    // Function to animate counting from 0 to targetNumber
    function animateCount() {
      let currentNumber = 0;
      const interval = 10; // milliseconds
      const step = Math.ceil(targetNumber / (2000 / interval));
  
      const countInterval = setInterval(function() {
        currentNumber += step;
        countElement.textContent = currentNumber;
        if (currentNumber >= targetNumber) {
          countElement.textContent = targetNumber;
          clearInterval(countInterval);
        }
      }, interval);
    }
    // Call the function to start the counting animation
    animateCount();
  });
  