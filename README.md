# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @faezcat/lotide`

**Require it:**

`const _ = require('@faezcat/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* assertArraysEqual(array 1, array 2) : asserts with a visual cue if two arrays are equal

* assertEqual(actual, expected) : asserts with a visual cue if two non-object parameters are equal

* assertObjectsEqual(actual, expected): asserts with a visual cue if two objects are equal

* countLetters(sentence) : lists the letters and counts per letter for the string passed in the sentence parameter

* countOnly(allItems, itemsToCount) : this function tells you how many times each item in the "itemsToCount" parameter was found within allItems

* eqArrays(array1, array2) : this function evaluates if two arrays are equal and returns true or false accordingly 

* eqObjects(object1, object2) : this function evaluates if two objects are equal and returns true or false accordingly 

* findKey(object, callback) : this function takes in an object and a callback function. It then scans the object and returns the first key for which the callback returns a truthy value. If no key is found, then it will return undefined

* findKeyByValue(object, value) : this function takes in an object and a value. It then scans the object and returns the first key which contains the given value. If no key with that given value is found, then it will return undefined

* head(array) : this function returns the first element within the array provided

* letterPositions(sentence) : this function returns an object containing all the letters of the sentence parameter alongside of the index value(s) for each letter

* map(array, callback) : this function will return a new array based on the results of the callback function

* middle(array) : this function returns an array containing the middle value of the source array if the number of elements are odd, or the middle two values of the source array if the number of elements are even

* tail(array) : this function returns all elements excluding the first element within the array provided

* takeUntil(array, callback) : this function will return a slice of the array with elements taken from the beginning until the callback/predicate returns a truthy value

* without(array 1, array 2) : this function takes in a source array (array 1) and an itemsToRemove array (array 2). It then returns a new array with only those elements from the source array that are not present in the itemsToRemove array