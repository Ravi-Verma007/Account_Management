import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    users:[{
        email: null,
        password: null,
        firstName: null,
        lastName: null,
        address: null,
        country: null,
    }],
    loggedIn: false
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        login:(state,action)=>{
            if(state.users)
            state.users.map((user)=>{
            if (user.email === action.payload.email && user.password === action.payload.password) {
                    state.loggedIn = true;
                    user.email = action.payload.email;
                    // console.log("LoggedIn")
              } else {
                alert('Invalid credentials');
                state.loggedIn = false;
              }
        })},
        logout:(state,action)=>{        
                state.loggedIn = action.payload;
            
        },
        register:(state,action)=>{
            state.users.map((user)=>{
                user.email = action.payload.email;
                user.firstName = action.payload.firstName;
                user.address = action.payload.address;
                user.lastName = action.payload.lastName;
                user.country = action.payload.country;
                user.password = action.payload.password;
            })
        }
    }
})

export const {login, logout, register} = userSlice.actions;

export default userSlice.reducer;