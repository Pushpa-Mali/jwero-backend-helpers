const {removeDuplicates} = require("../src/removeDuplicates");

describe('removeDuplicate',()=>{

    test('should remove dulicates from an array of numbers',()=>{
        const input=[33, 44, 33, 22, 11, 34, 10];
        const expected=[33,44,22,11,34,10];
        expect(removeDuplicates(input)).toEqual(expected);
    });
});