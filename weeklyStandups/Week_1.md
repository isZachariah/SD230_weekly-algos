I enjoyed this weeks algorithms and had a lot of fun figuring out solutions. For my weekly stand-up I would like to focus on problemThree:

I struggled to figure out how to find the common ending. The way I built every function was by looking at the tests and orienting myself toward passing them.

Here is my code:

```javascript
function problemThree(str1, str2) {
    if (str1 === str2) return str1;
    if (str1 === '' || str2 === '') return '';
    for (let c = 0; c < str2.length; c++) {
        const substr2 = str2.substring(c, str2.length);
        if (str1.toLowerCase().includes(substr2.toLowerCase())) {
            if (substr2.length > 2) {
                return substr2;
            }
        }
    }
    return '';
}
```

After creating the first two if statements and passing three of the 5 tests just with those, I brainstormed solutions for the other two. I knew about the substring() method and the includes method and got the idea to create  a four loop that could count to the length of the string and therefor decrement the length of the substring. This solution worked, for the most part. I had to add that extra if statement because the substring would continue to decrement  all the way down and return just an 'e' because that was the smallest shared substring of both strings. Liz pointed out a much better method to  have used would have been the endswith() method. here is that implementation:

```javascript
function problemThree(str1, str2) {
    for (let c = 0; c < str2.length; c++) {
        const substr2 = str2.substring(c, str2.length);
        if (str1.toLowerCase().endsWith(substr2.toLowerCase())) {
                return substr2;
        }
    }
    return '';
}
```

Not only does this solution get rid of that extra if statement it actually gets rid of all the extra if statements I had in place before the for loop. I really like the elegance of this second solution and the fact that it doesn't need any iffy logic to get around the tests.

As far as the project is going, I have been playing around with writing parsers for #3, the calculator and it's been pretty interesting. A lot of aspects of software development (compilation, linting, IDEs, etc) incorporate heavy amounts of lexical analysis and parsing. If you're interested look into Abstract Syntax Trees. I found some good resources, feel free to message me, and I'll send some your way! 