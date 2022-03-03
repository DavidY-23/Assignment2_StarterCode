// FOR EACH //
Array.prototype.myEach = function (callbackFn) {
    for (let i = 0; i < this.length; i++) {   // "this" keyword refers to the array being called.
        if (this[i] === undefined) continue;
        // callbackFn can take up to 3 input parameters:
        // element
        // element, index
        // element, index, array
        callbackFn(this[i], i, this);   // callbackFn is "console.log(x,i,myArray)" 
    }
};
// TEST //
// Test myEach against the native forEach to ensure that myEach works as the same as forEach
let myArray = [1,2,,4,5];   // Array called by the function

// Test with 1 parameter: element
console.log("myEach (1 parameter): element");
myArray.myEach(x => console.log(x));   // Parameter: x => console.log(x)
console.log("forEach (1 parameter): element");
myArray.forEach(x => console.log(x));   // Parameter: x => console.log(x)

// Test with 2 parameters: element, index
console.log("myEach (2 parameters): element, index");
myArray.myEach((x,i) => console.log(x,i));   // Parameter: (x,i) => console.log(x,i)
console.log("forEach (2 parameters): element, index");
myArray.forEach((x,i) => console.log(x,i));   // Parameter: (x,i) => console.log(x,i)

// Test with 3 parameters: element, index, array
console.log("myEach (3 parameters): element, index, array");
myArray.myEach((x,i,myArray) => console.log(x,i,myArray));   // Parameter: (x,i,myArray) => console.log(x,i,myArray)
console.log("forEach (3 parameters): element, index, array");
myArray.forEach((x,i,myArray) => console.log(x,i,myArray));   // Parameter: (x,i,myArray) => console.log(x,i,myArray)

// Original array is not affected
console.log("Original array:");
console.log(myArray);

// MAP //
Array.prototype.myMap = function(callbackFn) {
    //Create a new array.
    mapArray = []
    for (let i = 0; i < this.length; i++) {
        if (this[i] === undefined) continue;
        //Creating the new values of the array to push into the new array
        const result = callbackFn(this[i], i, this)
        mapArray.push(result)
    }
    //Returning the array
    return mapArray;
};

// SOME //
Array.prototype.mySome = function(callbackFn) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] === undefined) continue;
        if (callbackFn(this[i], i, this)) return true;
    }
    return false;
};

testSome = [1,2,3,4,5]
const even = (element) => element % 2 === 0;
console.log(testSome.mySome(even))
/** 
// REDUCE //
Array.prototype.myReduce = function() {

};
**/

// INCLUDES //
Array.prototype.myIncludes = function(includeVal) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] === undefined) continue;
        //Checks if the current value in index is contains certain value
        if (this[i] === includeVal) return true;
    }
    //After looping if the certain value is not in the array
    return false;
};
console.log("Testing includes")
testInclude = [1,2,3,4,5];
console.log(testInclude.myIncludes(5));
console.log(testInclude.myIncludes(6));



// INDEXOF //
Array.prototype.myIndexOf = function(value) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] === undefined) continue;
        //If the value is present, returns the index
        if (this[i] === value) return i;
    }
    //Returns -1 if the certain value is not present
    return -1;
};
console.log("Testing myIndex")
testIndex = [1,2,3,4,5];
console.log(testIndex.myIndexOf(5));
console.log(testIndex.myIndexOf(6));


/**
// PUSH //
Array.prototype.myPush = function(...args) {  // Use rest parameter to accept any number of input arguments
    let args_index = 0;  // Index of new element
    let length = this.length;   // Length of "this" array
    // The last element of "this" array is at length - 1
    for (let i = length; i < length + args.length; i++) {
        this[i] = args[args_index];  // Add new element to end of "this" array
        args_index++;
    }
    return this.length;  // Return new length of "this" array
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function() {

};

// KEYS //
Object.myKeys = function() {

};

// VALUES //
Object.myValues = function() {

};
*/