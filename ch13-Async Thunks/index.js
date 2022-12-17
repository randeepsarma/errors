const store = require('./app/store.js')
const fetchUsers = require('./features/user/userSlice').fetchUsers

console.log('Initial State',store.getState())

const unsubscribe = store.subscribe(()=>{
    console.log('Updated state ', store.getState())
}) 

//Below is an async function ,so it does not require subscribe function
store.dispatch(fetchUsers())

