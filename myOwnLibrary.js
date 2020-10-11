function isTouching (ob5,ob6){
    if (ob5.x - ob6.x < ob6.width/2 + ob5.width/2
      && ob6.x - ob5.x < ob6.width/2 + ob5.width/2
      && ob5.y - ob6.y < ob6.height/2 + ob5.height/2
      && ob6.y - ob5.y < ob6.height/2 + ob5.height/2) {
    return true;   
  }
  else {
  return false;
  }
  }
  function bounceOff(ob5,ob6){
    if (ob5.x - ob6.x < ob6.width/2 + ob5.width/2
      && ob6.x - ob5.x < ob6.width/2 + ob5.width/2){
  ob5.velocityX  = ob5.velocityX *(-1)
  ob6.velocityX  = ob6.velocityX *(-1)
      }
      if (ob5.y - ob6.y < ob6.height/2 + ob5.height/2
        && ob6.y - ob5.y < ob6.height/2 + ob5.height/2){
    ob5.velocityY  = ob5.velocityY *(-1)
    ob6.velocityY  = ob6.velocityY *(-1)
        }
    
  
  }