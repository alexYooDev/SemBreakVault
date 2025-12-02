""" 
Example:
Input: nums = [2, 7, 11, 15], target = 9
Output: [0, 1]  (because nums[0] + nums[1] = 2 + 7 = 9) 
"""

nums = [15,11,2,7]
target = 9

def two_sum_brute_force(nums, target):
    
    n = len(nums)
    
    for i in range(n):
        for j in range(i+1, n):
            if (nums[i] + nums[j] == target):
                return [i,j]
            
def two_sum_hash_table(nums, target):
    seen = {}
    
    for idx, num in enumerate(nums):
        
        # target - num == the number we are looking for 
        complement = target - num
        
        # check if that number exists in the hash table
        if complement in seen:
            return [seen[complement], idx]
        
        # save idx and value pair in hash table
        seen[num] = idx
        
    return []
            
result = two_sum_hash_table(nums, target)

print(result)


        