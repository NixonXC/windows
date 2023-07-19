function updateClock() {
    var timeElement = document.querySelector('.time');
  
    if (timeElement) {
      var currentTime = new Date();
      var hours = currentTime.getHours().toString().padStart(2, '0');
      var minutes = currentTime.getMinutes().toString().padStart(2, '0');
      var amOrPm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12;
      var timeString = hours + ':' + minutes + ' ' + amOrPm;
      var dateString = currentTime.getDate() + '/' + (currentTime.getMonth() + 1) + '/' + currentTime.getFullYear();
  
      timeElement.innerHTML = '<p>' + timeString + '</p>' + '<p>' + dateString + '</p>';
    }
  }
  
  // Call the updateClock function every second to keep the clock updated
  setInterval(updateClock, 1000);
  const startButton = document.getElementById('start');
  const startMenu = document.getElementById('startmenu');
  
  startButton.addEventListener('click', toggleStartMenu);
  
  function toggleStartMenu() {
    startMenu.classList.toggle('open');
  }