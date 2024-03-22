import {merge} from '../src/merge';

describe('Test Case 1', () =>{
    test('All three list have the same size', () => {
    const collection1_1: number[] = [1, 3, 5, 7, 9];
    const collection2_1: number[] = [10, 8, 6, 4, 2];
    const collection3_1: number[] = [11, 12, 13, 14, 15];
    const expected_1: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    expect(merge(collection1_1, collection2_1, collection3_1)).toStrictEqual(expected_1);
    });
});


describe('Test Case 2', () =>{
    test('All three list have different size', () => {
        const collection1_2: number[] = [2, 4, 6, 80];
        const collection2_2: number[] = [3, 1];
        const collection3_2: number[] = [7, 8, 9, 12, 37];
        const expected_2: number[] = [1, 2, 3, 4, 6, 7, 8, 9, 12, 37, 80];

    expect(merge(collection1_2, collection2_2, collection3_2)).toStrictEqual(expected_2);
    });
});


describe('Test Case 3', () =>{
    test('Some list is empty', () => {
        const collection1_2: number[] = [2, 4, 6];
        const collection2_2: number[] = [];
        const collection3_2: number[] = [7, 8, 9];
        const expected_2: number[] = [2, 4, 6, 7, 8, 9];

    expect(merge(collection1_2, collection2_2, collection3_2)).toStrictEqual(expected_2);
    });
});