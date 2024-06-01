/**
 * Removes duplicate elements from an array.
 * @param {Array} arr - The input array.
 * @returns {Array} A new array with duplicate elements removed.
 */

function removeDuplicates(arr){
    return [...new Set(arr)];

}

exports.removeDuplicates=removeDuplicates;