/* 
https://leetcode.com/problems/roman-to-integer/
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.
*/

const romanToIntT = function(s:string) {
    const romanMapT: Record<string,number> = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000,
        }
    
    let accumulator = 0;
    for (let x = 0; x < s.length; x++) {
        const roman = s[x];
        if ((roman == 'I' || roman == 'X' || roman == 'C' || roman == 'M') && x < s.length - 1) {
            if (roman == 'I' && s.charAt(x + 1) == 'V') {
                accumulator -= romanMapT[roman];
            } else if (roman == 'I' && s.charAt(x + 1) == 'X') {
                accumulator -= romanMapT[roman];
            } else if (roman == 'X' && s.charAt(x + 1) == 'L') {
                accumulator -= romanMapT[roman];
            } else if (roman == 'X' && s.charAt(x + 1) == 'C') {
                accumulator -= romanMapT[roman];
            } else if (roman == 'C' && s.charAt(x + 1) == 'D') {
                accumulator -= romanMapT[roman];
            } else if (roman == 'C' && s.charAt(x + 1) == 'M') {
                accumulator -= romanMapT[roman];
            } else {
                accumulator += romanMapT[roman];
            }
        } else {
            accumulator += romanMapT[roman];
        }
    }
    return accumulator;
}

function mainT(){
    /* 
    Example 1:
        Input: s = "III"
        Output: 3
        Explanation: III = 3.
    
    */
    // Arrange
    let input =   "III"
    let output = 3
    let result = 0

    // Act
    result = romanToIntT(input)
    // Assert
    console.log(result === output)

    /* Example 2:
        Input: s = "LVIII"
        Output: 58
        Explanation: L = 50, V= 5, III = 3.
     */
    // Arrange
     input =   "III"
     output = 3


    // Act
     result = romanToIntT(input)
    // Assert
    console.log(result === output)

    /* Example 3:
        Input: s = "MCMXCIV"
        Output: 1994
        Explanation: M = 1000, CM = 900, XC = 90 and IV = 4. */
    // Arrange
     input =   "III"
     output = 3


    // Act
     result = romanToIntT(input)
    // Assert
    console.log(result === output)

}
mainT()