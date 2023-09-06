import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { FormControl, FormLabel, TextField } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../features/userData/userDataSlice";
import { nanoid } from "@reduxjs/toolkit";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const CreateUser = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    const dispatch = useDispatch()


  const [newUser, setNewUser] = useState({
    id : nanoid(),
    advisorName: "",
    email: "",
    institution: "",
    role: "",
    status: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addUser(newUser))

    //reseting values
    setNewUser({
        id : nanoid(),
        advisorName: "",
        email: "",
        institution: "",
        role: "",
        status: "",
      })

  };

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        Create
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create User
          </Typography>

          <FormControl
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <TextField
              id="advisorName"
              name="advisorName"
              label="Advisor Name"
              variant="outlined"
              value={newUser.advisorName}
              onChange={handleChange}
            />
            <TextField
              id="email"
              name="email"
              label="Email"
              variant="outlined"
              value={newUser.email}
              onChange={handleChange}
            />
            <TextField
              id="institution"
              name="institution"
              label="Institution"
              variant="outlined"
              value={newUser.institution}
              onChange={handleChange}
            />
            <TextField
              id="role"
              name="role"
              label="Role"
              variant="outlined"
              value={newUser.role}
              onChange={handleChange}
            />
            <TextField
              id="status"
              name="status"
              label="Status"
              variant="outlined"
              value={newUser.status}
              onChange={handleChange}
            />
            <Button type="submit" variant="outlined" onClick={handleSubmit}>
              Submit
            </Button>
          </FormControl>
        </Box>
      </Modal>
    </>
  );
};
export default CreateUser;
