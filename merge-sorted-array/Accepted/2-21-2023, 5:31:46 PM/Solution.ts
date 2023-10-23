// https://leetcode.com/problems/merge-sorted-array

/**
 Do not return anything, modify nums1 in-place instead.
 */
function swap(as: number[], i: number, bs: number[], k: number) {
    [as[i],bs[k]] = [bs[k], as[i]];
}

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let a = m-1;
    let b = n-1;
    for(let i = m+n-1; i >= 0; i--) {
        if(0 <= a && 0 <= b) {
            if(nums1[a] >= nums2[b]) {
                swap(nums1, a, nums1, i)
                a--;
            }else{
                swap(nums2, b, nums1, i)
                b--;
            }
        }else if (0 <= b) {
            swap(nums2, b, nums1, i)
            b--;
        }else if (0 <= a) {
            swap(nums1, a, nums1, i)
            a--;
        }
    }
};