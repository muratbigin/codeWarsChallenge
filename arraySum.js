

// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S.Each array includes only integer numbers.Output is a number too.
let result = []
const arrayPlusArray = (arr1, arr2) => result.push(arr1.reduce((a, b) => a + b) + arr2.reduce((a, b) => a + b))


const orArr = [1, 2, 3] // dynamic
const orArr2 = [4, 5, 6]

arrayPlusArray(orArr, orArr2); //hard code

console.log(result.toString())

