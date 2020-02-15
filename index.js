// Code your solution in this file!

function  distanceFromHqInBlocks(num){
  return(num < 42 ? (42 - num) : (num - 42))
}

function  distanceFromHqInFeet(num){
  return(distanceFromHqInBlocks(num) * 264)
}

function distanceTravelledInFeet(pt1, pt2){
  return (264 * (pt1 < pt2 ? (pt2 - pt1) :  (pt1 - pt2)))
}

function calculatesFarePrice(start, destination) {
    const dtf = distanceTravelledInFeet(start, destination);
    if (dtf <= 400) {
        return 0;
    } else if (dtf > 400 && dtf <= 2000) {
        return .02 * (dtf - 400);
    } else if (dtf > 2000 && dtf <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}