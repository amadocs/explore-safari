// Okavango wildlife show more button
function showMoreAnimals() {
  var x = document.getElementById("show-hide-animals");
  var b = document.getElementById("btn-show-hide-animals");
  if (x.style.display === "none") {
      x.style.display = "block";    
      b.innerHTML = "Show Less";
      
  } else {
    x.style.display = "none";
    b.innerHTML = "Show More...";
  }
  }

  // Chobe wildlife show more button
function chobeMoreAnimals() {
  var x = document.getElementById("show-hide-chobe-animals");
  var b = document.getElementById("btn-show-hide-chobe-animals");
  if (x.style.display === "none") {
      x.style.display = "block";    
      b.innerHTML = "Show Less";
      
  } else {
    x.style.display = "none";
    b.innerHTML = "Show More...";
  }
  }


  