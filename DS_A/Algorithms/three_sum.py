""" 
Find three numbers that sum to zero. Can you adapt the two-sum approach?
"""

nums = [1, 3, -1, -2, 5]

def three_sum(nums):
    target = 0
    
    seen = {}
    
    """ 
    1. seen 에 인덱스, 값 저장
    2. seen 에 target을 0으로 만드는 값 3개간 있는 지 찾기
    3. 있다면 리턴
    """
    
    for idx, num in enumerate(nums):
        
        target = 0
        
        seen[num] = idx
        
    return []
    
    
result = three_sum(nums)

print(result)

            
    