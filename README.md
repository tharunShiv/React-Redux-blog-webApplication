## Folder: Redux Example

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
5.  create a folder called reducers and create the index and postReducer with content.
6.  create actions folder in src, create types.js which defines constants that are to be exported.
7.  write the export function in the postReducer.js
8.  compose the postActions.js
9.  we no longer need the fetch request in the componentWillMount, we can also remove the constructor function and the states in the App.js
10. where we get the data, we no longer set the state, but dispatch it to the reducer
11. The reducer will check the type in the switch case and return all of the states... , the actions from the payload
12. Now the first thing we want to do in our components is to import connect.. which connects the components to the redux store that was provided by the Provider component.
13. export the connect along with fetchposts and Posts. refer Posts.js
14. We have to map state to props and then use the data in it. [refer Posts.js]
15. Install the redux devtools
16. Add the redux extension as enhancer and import compose.
17. Now write the fetch code which returns the single post from the server, in the the createPost in the postAction.js
18. Write the NEW_POST case in the postReducer.js
19. Import the connect, createPost and PropTypes into the PostForm.
20. Call the action where the onSubmit event has occured.
21. Export the connect as shown in PostForm.js
22. Observe that, in the Reducer, we are sending the item to the components, we are basically dispersing the item to all the components. So we will receive it in the Posts.js too. That is the concept of redux, one single source, one single store..
23. mapStateToProps and add it to proptypes
24. Now how do we use this new post? we will add it to the list of posts
25. using another lifecycle method: componentWillReceiveProps
    Note: the id will not be unique here.

## Folder: ReactJs - Redux - basics

The problem with bigger apps where we have a lot of component interactions.
Redux is the solution to this problem and helps in managing the application state.

`npm start`

The process:
The view/app dispatches the action, the reducer handles the action, changes state, the state is stored in the state and the new state is pass the state to the registered view/app

Steps:

1. Install redux
   npm install redux --save

2. index.js: import createStore
   refer index.js only redux code

3. create Store
4. Tell who's responsible to handle the actions i.e., the reducer, give the initial state
5. define the reducer using switch statements
6. return the state
7. dispatch actions
8. it will perform step3, step 4
9. subscribe to the state value change in the store
10. handle that data, which is the latest data in the store.

Multiple Reducers:
we can have multiple reducers BUT
we cannot supply multiple reducers with the createStore.
instead, we have to import combineReducers and use it

and dispatch as usual..
make sure to use unique action names
