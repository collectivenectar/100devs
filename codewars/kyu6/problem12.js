//Return the number of times a person at window below h sees a ball bouncing with
//bounce * h = each next bounce height. If window isn't below h or bounce rate
//outside range (0,1)

function bouncingBall(h,  bounce,  window) {
  if(bounce > 0 && bounce < 1 && window < h){
    let ballBounceHeight = 0 + h
    let bounces = 0
    let seenTimes = 0
    while(ballBounceHeight > window){
      seenTimes++
      ballBounceHeight *= bounce
      if(ballBounceHeight > window){
        seenTimes++
      }
    }
    return seenTimes
  }
  else{
    return -1
  }
}
console.log(bouncingBall(30.0, 0.66, 1.5))
//should return 3
