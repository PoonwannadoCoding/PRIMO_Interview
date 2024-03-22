import {merge} from '../src/merge';

describe('unit test for merge function', () =>{
    test('normal merge', () => {
        expect(merge([1,2,3], [6,5,4], [7,8,9])).toStrictEqual([1,2,3,4,5,6,7,8,9])
    });
});