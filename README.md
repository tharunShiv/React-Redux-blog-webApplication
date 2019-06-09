The purpose:
In react , we have components which have their own state, say we have form components, states which hold the value of each field..

so managing the individual component's state is really challenging..

We get application level state, its immutable, comes from teh top down, we dont change it, but recreate it..

[ refer attached image ]
There is (components)view, the interaction will fire actions, which will dispatch action to the store(includes the state).. the reducers are peer functions that defines how the app state should change( it is recreated) , this will be sent to the component and it will react according to it.

npm i -g create-react-app

create-react-app reduxexample

cd reduxexample

npm start
