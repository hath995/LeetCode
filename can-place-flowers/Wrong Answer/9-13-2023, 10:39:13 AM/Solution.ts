// https://leetcode.com/problems/can-place-flowers

function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    for(let i = 0; i < flowerbed.length; i++) {
        if(flowerbed[i] == 0) {
            if((i-1 >=0 && flowerbed[i-1] == 0 || i-1 < 0) && (i+1 < flowerbed.length && flowerbed[i+1] == 0 || i+1 >= flowerbed.length)) {
                n--;
                flowerbed[i] = 1;
            }
        }
        if(n == 0) {
            break;
        }
    }
    console.log(n)
    return n == 0;
};