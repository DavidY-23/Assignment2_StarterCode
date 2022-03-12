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

/** 
// REDUCE //
Array.prototype.myReduce = function() {

};
**/

// INCLUDES //
Array.prototype.myIncludes = function(includeVal, index) {
    if (index === undefined) index = 0;
    for (let i = index; i < this.length; i++) {
        if (this[i] === undefined) continue;
        //Checks if the current value in index is contains certain value
        if (this[i] === includeVal) return true;
    }
    //After looping if the certain value is not in the array
    return false;
};

// INDEXOF //
Array.prototype.myIndexOf = function(value, index) {
    //If there is no given index, defaults the index to 0.
    if (index === undefined) index = 0
    for (let i = index; i < this.length; i++) {
        if (this[i] === undefined) continue;
        //If the value is present, returns the index
        if (this[i] === value) return i;
    }
    //Returns -1 if the certain value is not present
    return -1;
};

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
Array.prototype.myLastIndexOf = function(value, index) {
    //If there is no given index, defaults the index to length of this array - 1.
    if (index === undefined) index = this.length-1
    for (let i = index; i > 0; i--) {
        if (this[i] === undefined) continue;
        //If the value is present, returns the index
        if (this[i] === value) return i;
    }
    //Returns -1 if the certain value is not present
    return -1;
};

// KEYS //
Object.myKeys = function(object) {
    //Creates a new array to return keys
    const keyArray = []
    //If the object does not exist, return a blank array
    if (object === undefined) return;
    //Loops through the object, adding the keys to the array
    for (const keys in object) {
        if (keys === undefined) continue;
        keyArray.push(keys);
    }
    //Returns array
    return keyArray;
};

Object.myValues = function(object) {
    const valueArray = []
    //If the object does not exist, return a blank array
    if (object === undefined) return;
    for (value in object) {
        if (object[value] === undefined) continue;
        valueArray.push(object[value]);
    }
    return valueArray;
};
