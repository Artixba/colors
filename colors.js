var colorValue = 0;
var header = document.querySelector('h1');
header.addEventListener('click', function(){
  colorValue += 25;
  if (colorValue > 99){
    colorValue = 0;
  }
})

function getColor(){
  var place = threatLevel();
  header.style.color = place;
}

function threatLevel(){
  var low = '#09FF00';
  var med = '#FFF400';
  var high = '#FF0000';
  if (colorValue < 40){
    return low
  }
  else if (colorValue >= 40 && colorValue < 75 ) {
    return med
  }
  else {
    return high
  }
}


setInterval('getColor()',500);
