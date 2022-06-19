// 1. Write a function that takes a number and returns true if it is a positive number and false if it is a negative number.

const isNumberPositive = (item) => {

    if(item >= 0){
        return true;
    }
    else{
        return false;
    }
}

console.log(isNumberPositive(-6));
console.log(isNumberPositive(5));

// 2. Write a function that takes a number of days and converts it into an age.

const convertDaysToAge = (days) => {
    return days / 365;
}

console.log(convertDaysToAge(400));
// 3. Write a function that takes three numbers and returns the largest of the three numbers.

const getLargestNumber = (a, b, c) => {
    return Math.max(a, b, c)
}

console.log(getLargestNumber(2, 1, 4))
console.log(getLargestNumber(6, 2, 3))

// 4. Write a function that takes an array of names and returns the last name from the array of names.

const getLastName = (lastName) => {
    let lastIndex = lastName.length - 1;
    return lastName[lastIndex];
}

console.log(getLastName(["Charlie", "Rob", "Andy"]))
console.log(getLastName(["Ash", "Stu"]))

//5. Write a function that takes an array of numbers and returns true if all of the numbers are positive. It should return false if there are one or more negative numbers in the array.

const allNumbersPositive = (numbers) => {
    for (let i = 0; i < numbers.length; i++){
        if (!isNumberPositive(numbers[i])){
            return false;
        }
    } 
    return true;
}

console.log(allNumbersPositive([2,4,5])); 
console.log(allNumbersPositive([-5,4,6]));