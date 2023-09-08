import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useDispatch } from 'react-redux';
import { removeUser } from '../features/userData/userDataSlice';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  p: 4,
};

const DeleteUser = ({userId})=> {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const dispatch = useDispatch();

  return (
    <div>
      <Button style={{color: 'black'}} onClick={handleOpen}><DeleteOutlineOutlinedIcon/></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Delete the Advisor?
          </Typography>
          <Box sx={{display: 'flex',justifyContent: 'flex-end'}}>
          <Button variant="text" style={{color: 'black'}}>Cancel</Button>
          <Button variant="text" onClick={()=>dispatch(removeUser(userId))}>Delete</Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default DeleteUser;