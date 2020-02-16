// Code your solution in this file!
function distanceFromHqInBlocks(block) {
    const hq_str_location = 42
    return block > hq_str_location ? (block - hq_str_location) : (hq_str_location - block) 
}

function distanceFromHqInFeet(block) {
    const hq_blocks = distanceFromHqInBlocks(block)
    const feet_in_block = 264

    return (hq_blocks * feet_in_block)
}

function distanceTravelledInFeet(startingBlock, endingBlock) {
    const feet_in_block = 264
    return endingBlock > startingBlock ? ((endingBlock - startingBlock) * feet_in_block) : ((startingBlock - endingBlock) * feet_in_block)
}

function calculatesFarePrice(start, destination) {
    const dist_trv_ft = distanceTravelledInFeet(start, destination)

    switch (true) {
        case dist_trv_ft < 400:
            return 0
        case dist_trv_ft >= 400 && dist_trv_ft < 2000:
            return (dist_trv_ft - 400) * 0.02
        case dist_trv_ft > 2000 && dist_trv_ft < 2500:
            return 25
        default:
            return 'cannot travel that far'
    }
}