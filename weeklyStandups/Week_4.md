I decided to go over problemFour

```javascript
const problemFour = (arr) => {
    let strings = {
        short: [],
        long: [],
    }
    arr.forEach(string => string.length < 10 ? strings.short.push(string) : strings.long.push(string))

    return strings

}
```

I first created an object containing two arrays and then used the forEach array operator and the ternary operator to push strings that were less than ten characters to the short array and strings that were longer to the long array. I found this solution to be quite nice, I am sure I could have used filter but I am not sure how I could have done it in one line... I gotta keep thinking on that one. Thanks guys!