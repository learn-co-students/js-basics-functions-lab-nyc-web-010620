function distanceFromHqInBlocks(someValue) {
    const street = 42;
    return Math.abs(street - someValue);
}

function distanceFromHqInFeet(someValue){
    let distance = distanceFromHqInBlocks(someValue)*264;
    return distance;
}

function distanceTravelledInFeet(start, destination){
    let distance = (Math.abs(start-destination))*264;
    return distance;
}

function calculatesFarePrice(start, destination){
    if (distanceTravelledInFeet(start, destination) <400) {
        return 0;
    } else if (distanceTravelledInFeet(start, destination) >401 && distanceTravelledInFeet(start, destination)<2000){
        return  (distanceTravelledInFeet(start, destination)-400)*0.02
    } else if (distanceTravelledInFeet(start, destination) >2000 && distanceTravelledInFeet(start, destination)<2500){
        return 25;
    }
    else if(distanceTravelledInFeet(start, destination) > 2500) {
        return 'cannot travel that far';
    }
}
