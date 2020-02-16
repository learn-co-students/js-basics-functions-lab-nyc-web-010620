// Returns the number of blocks from Scuber's headquarters to the pickup location.
function distanceFromHqInBlocks(block) {
   if (block > 42) {
      return (block - 42);
   }
   else {
      return (42 - block);
   }
}

// Returns the number of feet from Scuber's headquarters to the pickup location. 
// You can use your distanceFromHqInBlocks function to help return the correct value here. 
// Use the knowledge that a block is 264 feet long.
function distanceFromHqInFeet(block) {
   return distanceFromHqInBlocks(block) * 264; 
}

// Calculates the number of feet a passenger travels given a starting block and an ending block - 
// it only calculates distance North and South (uptown/downtown). 
// It uses the knowledge that a block is 264 feet long.
function distanceTravelledInFeet(startingBlock, endingBlock) {
   if (startingBlock < endingBlock) {
      return (endingBlock - startingBlock) * 264; 
   }
   else {
      return (startingBlock - endingBlock) * 264; 
   }
}

// Given the same starting and ending block as the previous test (hint hint), 
// return the fare for the customer. The first four hundred feet are free. 
// For a distance between 400 and 2000 feet, the price is 2 cents per foot (not including 400, which are free!).
// Then Scuber charges a flat fare for a distance over 2000 feet and under 2500 feet. 
// Finally, Scuber does not allow any rides over 2500 feet - 
// the function returns 'cannot travel that far' if a ride over 2500 feet is requested.
function calculatesFarePrice(start, destination) {
   const distance = distanceTravelledInFeet(start, destination); 

   if (distance <= 400) {
      return 0;
   } 
   else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * .02; 
   }
   else if (distance > 2000 && distance < 2500) {
      return 25; 
   }
   else {
      return "cannot travel that far";
   }
   
}

