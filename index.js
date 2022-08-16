//1

const arr1 = [1,2,3];
const arr2 = [5,1,2,3,10]

const doubleValues = arr1.map(item => item * 2);
const doubleValues2 = arr2.map(item => item * 2);
console.log(doubleValues)
console.log(doubleValues2)

//or

function doubleValues3(array){
    const newArray = array.map(i => i*2);
    return newArray;
}
console.log(doubleValues3([1, 2, 3]));
console.log(doubleValues3([5, 1, 2, 3, 10]));


//2

function onlyEvenValues(array){
   const newArray = [];
   array.forEach(element => {
    if (element % 2 === 0){
        newArray.push(element);
    }
    }) 
    return newArray;
}

console.log(onlyEvenValues([1,2,4,8]))


//3

const arr3 = ["colt", "matt", "tim", "udemy"]

const showFirstAndLast = arr3.map(i => i.slice(0,1) + i.slice(i.length-1, i.length))
console.log(showFirstAndLast)

//or 

function showFirstAndLast2(array) {
    const newArray = array.map(i => i.substring(0,1) + i.substring(i.length - 1));
    return newArray;
}

console.log(showFirstAndLast2(["colt", "matt", "tim", "udemy"]))


//4

function addKeyAndValue(array, key, value) {
    return array.map(element => {
        element[key] = value;
        return element;
    });
}
console.log(addKeyAndValue([{ name: 'Elie' }, { name: 'Tim' }, { name: 'Matt' }, { name: 'Colt' }], 'title', 'instructor'));

//5

function vowelCount(string) {
    const vowelArray = ["a", "e", "i", "o", "u"];
    const countObject = {};
    const currentArray = [...string.toLowerCase()];

    // using includes()
    currentArray.forEach((letter) => {
        if (vowelArray.includes(letter)) {
            countObject[letter] = (countObject[letter] || 0) + 1;
        }
    });

    // using filter()
    // vowelArray.forEach(vowel => {
    //     let count = currentArray.filter(letter => letter === vowel);
    //     if (count.length > 0) {
    //         countObject[vowel] = count.length;
    //     };
    // });
    return countObject;
}

console.log(vowelCount('Elie')); // {e:2,i:1};
console.log(vowelCount('Tim')); // {i:1};
console.log(vowelCount('Matt')); // {a:1})
console.log(vowelCount('hmmm')); // {};
console.log(vowelCount('I Am awesome and so are you')); // {i: 1, a: 4, e: 3, o: 3, u: 1};
