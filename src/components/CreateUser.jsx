import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useTheme } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import { useState } from "react";
import "../Styles/createUser.css";
import { useDispatch ,useSelector } from "react-redux";
import { addUser } from "../features/userData/userDataSlice";

// Multiple chips-----------------------------------------------------------

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const roleNames = ["Teacher", "Mentor"];

const instituteNames = ["FBR", "UEA"];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
//-----------------------------------------------

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};



export default function CreateUser() {

  const dispatch = useDispatch()
  const rows = useSelector(state=>state.rows)


  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [status, setStatus] = useState("");

  const handleStatus = (e) => {
    setStatus(e.target.value);
    setNewUser({...newUser, 'status' : e.target.value})
  };

  const [newUser, setNewUser] = useState({
    id: rows.length+1,
    fname: "",
    lname: "",
    email: "",
    status: "",
    role: [],
    institution: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    dispatch(addUser(newUser))
    
    console.log(newUser);

    setNewUser({
      id: rows.length+1,
      fname: "",
      lname: "",
      email: "",
      status: "",
      role: [],
      institution: [],
    })

    setStatus('')
    setRole([])
    setInstitute([])

  };

  //Multiple chips-------------------------------------------------------------------

  const theme = useTheme();
  const [role, setRole] = useState([]);
  const [institute, setInstitute] = useState([]);

  const handleRoleChange = (event) => {
    const {
      target: { value },
    } = event;
    console.log(value)
    setRole(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    setNewUser({...newUser, 'role' : value})
  };

  const handleInstituteChange = (event) => {
    const {
      target: { value },
    } = event;
    setInstitute(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    setNewUser({...newUser, 'institution' : value})
  };

  //------------------------------------------------------------------------

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Create
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h5">Create Advisor</Typography>
          <div className="formcontainer">
            <form className="createform">
              <div>
                <TextField
                  label="First Name"
                  variant="outlined"
                  name="fname"
                  value={newUser.fname}
                  onChange={handleChange}
                />
              </div>
              <div>
                <TextField
                  label="Last Name"
                  variant="outlined"
                  name="lname"
                  value={newUser.lname}
                  onChange={handleChange}
                />
              </div>
              <div>
                <TextField
                  label="Email"
                  variant="outlined"
                  name="email"
                  value={newUser.email}
                  onChange={handleChange}
                />
              </div>

              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="status">Status</InputLabel>
                  <Select
                    labelId="status"
                    id="status"
                    value={status}
                    label="Status"
                    onChange={handleStatus}
                  >
                    <MenuItem value={"Active"}>Active</MenuItem>
                    <MenuItem value={"InActive"}>Inactive</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              <div>
                <FormControl sx={{ m: 1, width: "100%" }}>
                  <InputLabel id="demo-multiple-chip-label">
                    Role Abbreviations
                  </InputLabel>
                  <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    value={role}
                    onChange={handleRoleChange}
                    input={
                      <OutlinedInput id="select-multiple-chip" label="Chip" />
                    }
                    renderValue={(selected) => (
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                        {selected.map((value) => (
                          <Chip key={value} label={value} />
                        ))}
                      </Box>
                    )}
                    MenuProps={MenuProps}
                  >
                    {roleNames.map((name) => (
                      <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, role, theme)}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>

              <div>
                <FormControl sx={{ m: 1, width: "100%" }}>
                  <InputLabel id="demo-multiple-chip-label">
                    Institute Abbreviations
                  </InputLabel>
                  <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    value={institute}
                    onChange={handleInstituteChange}
                    input={
                      <OutlinedInput id="select-multiple-chip" label="Chip" />
                    }
                    renderValue={(selected) => (
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                        {selected.map((value) => (
                          <Chip key={value} label={value} />
                        ))}
                      </Box>
                    )}
                    MenuProps={MenuProps}
                  >
                    {instituteNames.map((name) => (
                      <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, role, theme)}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>

              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Button sx={{ color: "black" }} onClick={handleClose}>Cancel</Button>
                <Button type="submit" onClick={handleSubmit}>Create</Button>
              </Box>
            </form>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
