function reverseStr(str){
    str.split('').reverse().join('')
}
  
function isPalindrome(str){
    var reverse = reverseStr(str);
    return str === reverse;
}