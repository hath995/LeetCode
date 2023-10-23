// https://leetcode.com/problems/can-place-flowers

// function canPlaceFlowers(flowerbed: number[], n: number): boolean {
//     for(let i = 0; i < flowerbed.length; i++) {
//         if(flowerbed[i] == 0 && n > 0) {
//             if((i-1 >=0 && flowerbed[i-1] == 0 || i-1 < 0) && (i+1 < flowerbed.length && flowerbed[i+1] == 0 || i+1 >= flowerbed.length)) {
//                 n--;
//                 flowerbed[i] = 1;
//             }
//         }
//         if(n == 0) {
//             break;
//         }
//     }
//     console.log(n)
//     return n == 0;
// };

function isEmpty(fb: number[], i: number): boolean {
    return fb[i] === 0;
}

function noAdjacent(fb: number[], i: number): boolean {
    return (i-1 >=0 && isEmpty(fb, i-1) || i-1 < 0) && (i+1 < fb.length && isEmpty(fb, i+1) || i+1 >= fb.length)
}

function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    for(let i = 0; i < flowerbed.length; i++) {
        if(isEmpty(flowerbed, i) && n > 0 && noAdjacent(flowerbed, i)) {
            n--;
            flowerbed[i] = 1;
        }
        if(n == 0) {
            break;
        }
    }
    return n == 0;
};