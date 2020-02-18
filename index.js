// Code your solution in this file!
function distanceFromHqInBlocks(address) {
    if (address >= 42) {
        return (address - 42)
    } else {
        return (42-address)
    }
}

function distanceFromHqInFeet(address) {
    return (distanceFromHqInBlocks(address) * 264)
}

function distanceTravelledInFeet(start,destination) {
    let totalDist;
    if (start > destination) {
        totalDist = (start - destination) * 264
    } else {
        totalDist = (destination - start) * 264
    }
    return totalDist
}

function calculatesFarePrice(start,destination) {
    let distInFeet = distanceTravelledInFeet(start,destination)
    if (distInFeet <= 400) {
        return 0
    } else if (distInFeet <= 2000) {
        return (distInFeet - 400) * 0.02
    } else if (distInFeet > 2000 && distInFeet < 2500) {
        return 25
    } else {
        return "cannot travel that far"
    }

}