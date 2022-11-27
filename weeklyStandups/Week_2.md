Hey everyone,

I enjoyed this weeks algos assignment. After looking over everyone else's stand-ups, I've decided to go over problem one. For my solution I used Array.Sort((a, b) => a - b) and sorted the array from lowest to highest that way. Array.sort() without a clojure will sort the array alphabetically, so in order to get the solution I wanted I originally assumed I would need to put ((a, b) => a < b) or ((a, b) => a > b) in the clojure but it turns out it will not work with a boolean value and because of that you instead put a - b and that will produce a sort incrementing by value. Here is the final algorithm in all its glory:

```javascript
function problemOne(arr) {
    arr.sort((a,b) => a - b );
    return [arr[0], arr[arr.length-1]];
}
```