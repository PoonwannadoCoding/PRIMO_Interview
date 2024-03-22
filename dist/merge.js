"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = void 0;
function merge(collection1, collection2, collection3) {
    const result = [];
    const mergeResult = [];
    /*
    list 1 [1 2 3]
    list 2 [9 8 7]
    list 3 [4 5 6]
    
    compare list 1 and 2 first and 2 will move in rev
    after that compare with the result from first merge of 1 & 3 with 3
    
    
    */
    let index_collection_1 = 0;
    let index_collection_2 = collection2.length - 1;
    let index_collection_3 = 0;
    let index_result = 0;
    while (index_collection_1 < collection1.length && index_collection_2 >= 0) {
        if (collection1[index_collection_1] < collection2[index_collection_2]) {
            result.push(collection1[index_collection_1]);
            index_collection_1++;
        }
        else {
            result.push(collection2[index_collection_2]);
            index_collection_2--;
        }
    }
    while (index_collection_1 < collection1.length) {
        result.push(collection1[index_collection_1]);
        index_collection_1++;
    }
    while (index_collection_2 >= 0) {
        result.push(collection2[index_collection_2]);
        index_collection_2--;
    }
    while (index_result < result.length && index_collection_3 < collection3.length) {
        if (result[index_result] < collection3[index_collection_3]) {
            mergeResult.push(result[index_result]);
            index_result++;
        }
        else {
            mergeResult.push(collection3[index_collection_3]);
            index_collection_3++;
        }
    }
    while (index_collection_3 < collection3.length) {
        mergeResult.push(collection3[index_collection_3]);
        index_collection_3++;
    }
    while (index_result < result.length) {
        mergeResult.push(result[index_result]);
        index_result++;
    }
    return mergeResult;
}
exports.merge = merge;
// const collection1: number[] = [1, 3, 5, 7, 9];
// const collection2: number[] = [10, 8, 6, 4, 2];
// const collection3: number[] = [11, 12, 13, 14, 15];
// const result: number[] = merge(collection1, collection2, collection3);
// console.log(result);
//# sourceMappingURL=merge.js.map