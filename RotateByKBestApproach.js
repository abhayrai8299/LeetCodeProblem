function rotate(nums, k) {
        let n = nums.length;
        k = k % n;  // in case k > n
    
        // helper to reverse array in place
        function reverse(start, end) {
            while (start < end) {
                [nums[start], nums[end]] = [nums[end], nums[start]];
                start++;
                end--;
            }
        }
    
        // Step 1: reverse whole array
        reverse(0, n - 1);
        // Step 2: reverse first k elements
        reverse(0, k - 1);
        // Step 3: reverse rest
        reverse(k, n - 1);
    }
    
    // Example
    let nums = [1,2,3,4,5,6,7];
    rotate(nums, 3);
    console.log(nums); // [5,6,7,1,2,3,4]
    