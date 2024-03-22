**Merge Function**

For the logic and explanation it's all located in ./src./merge.ts file already


**Project Structure**
```
|
|
|__ dist
|     |
|     |__merge.js <= file for run the code
|     |__merge.js.map
|
|___ src 
|      |
|      |_merge.ts <= code file
|
|_ test
      |
      |_merge.test.ts <= here is the unit test
```
1. Need to compile the .ts file first by

  ```
  npm run build
  ```

2. In case you want to run the merge.ts on your own use command
   ```
   node ./dist/merge.js
   ```
3. The unit test file is in the directory test. In order to run the unit test use command
   ```
   npm test
   ```
