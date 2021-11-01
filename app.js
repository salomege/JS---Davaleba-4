//1
function number (num) {
    if (num % 2 === 0) {
        return true;
    }else{
        return false;
    }
}
console.log (number (10));
console.log (number (11));

//2
function getCurrencySymbolFromCode (currency) {
    if (currency == "USD") {
        return "$";
    } else if (currency == "EUR") {
        return "€";
    } else if (currency == "GEL") {
        return "ლ";
    } else {
        return (currency);
    }
}
console.log (getCurrencySymbolFromCode ("USD"));
console.log (getCurrencySymbolFromCode ("EUR"));
console.log (getCurrencySymbolFromCode ("ლ"));
console.log (getCurrencySymbolFromCode ("GBP"));

//3
function upperCase (word) {
    return (word.toLowerCase());
}
console.log (upperCase('I AM SALOME'));

//4
const myArray = [1,2,3,4,5,6,7,8,9,10];
console.log(myArray.filter((num) => num % 2 === 0));

//5
const person = [
    {name: 'John', age: 20},
    {name: 'Sofia', age: 22},
    {name: 'Alex', age: 26}
  ];

  const result = person.find( ({ name }) => name === 'Sofia' );

console.log(result);