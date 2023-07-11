function getGreeting() {
    var now = new Date();
    var hour = now.getHours();
    
    if (hour >= 0 && hour < 12) {
      return "Good morning";
    } else if (hour >= 12 && hour < 18) {
      return "Good afternoon";
    } else {
      return "Good evening";
    }
  }
  
  var greeting = getGreeting();
  document.getElementById("greet").innerHTML = greeting;
  