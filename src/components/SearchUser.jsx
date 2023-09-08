import SearchIcon from "@mui/icons-material/Search";
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { TextField } from "@mui/material";
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { searchUser } from "../features/userData/userDataSlice";




const SearchUser=()=>{

    const dispatch = useDispatch();

    const [user,setUser] = useState('');

    

    const handleChange =(e)=>{

        const lowerCaseInput = e.target.value.toLowerCase()
        setUser(lowerCaseInput)
        
        dispatch(searchUser(e.target.value.toLowerCase()))
    }

    return (
        <>
        {/* <FormControl>  */}
        <TextField
        value={user}
        onChange={handleChange}
        size="small"
          id="outlined-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          placeholder="Search By Name"
          InputProps={{
            startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
          }}
        />
      {/* </FormControl> */}
        </>
    )
}

export default SearchUser;