import { createSlice ,nanoid } from "@reduxjs/toolkit";
import {rows } from "../../data/Data";

const initialState = {
    rows : rows,
    searchUser: '',
}

const userDataSlice = createSlice({
    name : 'userTable',
    initialState,
    reducers : {
        addUser : (state,action)=> {
            const newUser = action.payload
            state.rows.push(newUser)
        },
        removeUser : (state,action)=> {
            state.rows = state.rows.filter((user)=> user.id !== action.payload )
        },
        searchUser: (state,action)=>{

             state.searchUser = action.payload;

        //     state.rows = state.rows.filter((user)=>
        //     {
        //         if(action.payload === ''){
        //             return user;
        //         }
        //         else {
        //             return user.advisorName.toLowerCase().includes(action.payload)
        //         }
        //     // user.advisorName?.toLowerCase().includes(action.payload.toLowerCase())
        //     }
        // )
       
        },

        updateUser: (state,action)=> {
            const updatedUser = action.payload
            const modifiedRows = state.rows.map((row,key)=> {
                if(row.id === updatedUser.id){
                    return updatedUser;
                }
                else{
                    return row;
                }
            })
            state.rows = modifiedRows
        },

    
    }
})

export const{addUser ,removeUser,searchUser,updateUser} = userDataSlice.actions

export default userDataSlice.reducer