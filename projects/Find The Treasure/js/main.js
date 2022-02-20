let mapWidth = 320;
let mapHeight = 320;
let clicks = 0;
let steps = 20;
let target = {
  x: getRandomlocation(mapWidth),
  y: getRandomlocation(mapHeight)
};

function getRandomlocation(size) {
  return Math.floor(Math.random() * size);
}

function getDistance(event, target) {
  let distX = event.offsetX - target.x;
  let distY = event.offsetY - target.y;

  return Math.sqrt((distX * distX) + (distY + distY));
}

function getDistanceHint(distance) {
  if (distance < 20) {
    return 'Boiling hot!';
  } else if (distance < 40) {
    return 'Really hot';
  } else if (distance < 60) {
    return 'Hot';
  } else if (distance < 100) {
    return 'Warm';
  } else if (distance < 200) {
    return "Cold";
  } else if (distance < 320) {
    return 'Really cold';
  } else {
    return 'Freezing!';
  }
}

$('.map').click(function (event) {
  clicks++;
  
  $('.score span').text(--steps);

  if (steps == 0) {
    alert('GAME OVER!');
    return;
  } else if (steps == 5) {
    $('.score span').css('color', 'red');
  }

  let distance = getDistance(event, target);
  let distanceHint = getDistanceHint(distance);

  $('.distance').text(distanceHint);
  
  if (distance < 10) {
    alert('Found the treasure in ' + clicks + ' clicks!');
  }
});