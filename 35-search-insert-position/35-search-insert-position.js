/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(nums.includes(target)) {
        return nums.indexOf(target)
    } else {
        let index=0
        for(let i=0; i<nums.length; i++) {
            if(nums[i]<target) {
                index=i+1
            } 
        }
        return index
    }
};