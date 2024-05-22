class Solution:
    def multiply(self, num1: str, num2: str) -> str:
        # Initialize the result list with zeros
        result = [0] * (len(num1) + len(num2))
        # Iterate through num2 from right to left
        for i in range(len(num2) - 1, -1, -1):
            carry = 0
            n2 = int(num2[i])
            # Multiply num2 digit with each digit of num1
            for j in range(len(num1) -1, -1, -1):
                n1 = int(num1[j])
                product = n1 * n2 + carry
                carry, result[i + j + 1] = divmod(result[i + j + 1] + product, 10)
            # Handle any remaining carry
            result[i] += carry
        # Conver result list into a string
        result_str = ''.join(map(str, result))
        # Remove leading zeros
        return result_str.lstrip('0') or '0'