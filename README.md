The purpose:
In react , we have components which have their own state, say we have form components, states which hold the value of each field..

so managing the individual component's state is really challenging..

We get application level state, its immutable, comes from teh top down, we dont change it, but recreate it..

[ refer attached image ]
There is (components)view, the interaction will fire actions, which will dispatch action to the store(includes the state).. the reducers are peer functions that defines how the app state should change( it is recreated) , this will be sent to the component and it will react according to it.

`npm i -g create-react-app`

`create-react-app reduxexample`

`cd reduxexample`

`npm start`

---

Submitting the form would be an action
Fetching the posts when the page loads -> that would be an action

Reducers: which will baasically define the state that will be sent back based on that action

---

Using redux:

installing Redux:

`npm i redux react-redux redux-thunk`

---

Steps:
[refer App.js]

1.  import Provider
2.  wrap the whole Return within <Provider>
3.  The Provider takes a store : The store holds the whole state tree of your application . The only way to change the state inside it is to dispatch an action to it.
4.  We create a store using createStore, we would be combining all of the reducers and pass it to the root reducer. Do this at a separate file store.js
