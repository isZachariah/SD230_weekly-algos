I wanted to add my versions of reacts useState and useReducer hooks- they're higher order functions, useState returns a setState function that allows you to change the value of the state object while useReducer both takes a reducer function as an argument and returns a dispatch function that interact with each other to affect the values of the state. These might not be as fully functional as the react hooks, but they do what they are supposed to and I'm pretty excited to have worked them out.

useState:

```javascript
function useState(obj) {
    let initialState = obj;
    const reducer = fn => {
      let newState;
      typeof fn === 'function'
        ? newState = fn(initialState)
        : newState = fn;
      Object.assign(initialState, newState);
    };
    return [initialState, reducer];
}
```

useReducer:

```javascript
function useReducer(reducer, initialState = {}) {
    let state = initialState;
    const store = {
        dispatch: (action) => {
            state = reducer(state, action)
        },
        getState: () => state

    }
    return [store.getState, store.dispatch]
}
```


