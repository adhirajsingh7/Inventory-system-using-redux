import { createSlice ,nanoid } from "@reduxjs/toolkit";
import { columns, rows } from "../../data/Data";

const initialState = {
    columns : columns,
    rows : rows,
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
    }
})

export const{addUser ,removeUser} = userDataSlice.actions

export default userDataSlice.reducer