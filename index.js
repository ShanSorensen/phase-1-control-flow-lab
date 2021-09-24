function scuberGreetingForFeet(rideDistance){
  if(rideDistance <= 400){
    return 'This one is on me!';
} else if(rideDistance > 2000 && rideDistance < 2500){
  return 'I will gladly take your thirty bucks.';
} else if(rideDistance >= 2500){
  return `No can do.`;
  }
}


function ternaryCheckCity(checkCity){
  if (checkCity === 'NYC'){ 
    return 'Ok, sounds good.';
  } else {
    return `No go.`;
  }
}

function switchOnCharmFromTip(gotTip){
  if(gotTip === 'generous'){
    return 'Thank you so much.';
  } else if(gotTip === 'not as generous'){
    return 'Thank you.';
  } else {
    return 'Bye.';
  }
}