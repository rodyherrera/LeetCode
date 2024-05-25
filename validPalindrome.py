class Solution:
    def isPalindrome(self, s: str) -> bool:
        # Convert to lowercase and remove non-alphanumeric characters
        cleaned_string = ''.join(char.lower() for char in s if char.isalnum())
        # Check if the cleaned string is a palindrome
        return cleaned_string == cleaned_string[::-1]