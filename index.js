// Code your solution in this file!
function distanceFromHqInBlocks(num) {
    return(num < 42 ? (42 - num):(num - 42))
}

function distanceFromHqInFeet(num) {
    return (distanceFromHqInBlocks(num) * 264)
}

function distanceTravelledInFeet(start,end) {
    return (264 * (start < end ? (end-start):(start-end)))
}

function calculatesFarePrice(start, destination) {
    const byfeet = distanceTravelledInFeet(start, destination);
    if (byfeet <= 400) {
        return 0
    } else if 
        (byfeet > 400 && byfeet <= 2000) {
            return .02 * (byfeet - 400); 
    } else if (byfeet > 2000 && byfeet <= 2500) {
            return 25;
    } else {
            return 'cannot travel that far';
        }
    }