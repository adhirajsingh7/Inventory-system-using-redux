import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useTheme } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import { useState } from 'react';
import '../Styles/createUser.css'

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

const names = [
  'Teacher',
  'Mentor'
];

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
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function CreateUser() {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [status, setStatus] = useState('');

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  //Multiple chips-------------------------------------------------------------------

  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleRole = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleDeleteRole=()=>{
    console.log('chip deleted');
  }

  //------------------------------------------------------------------------


  return (
    <div>
      <Button variant='contained' onClick={handleOpen}>Create</Button>
      <Modal
        open={open}
        onClose={handleClose}
        
      >
        <Box sx={style}>
          <Typography variant="h5">
            Create Advisor
          </Typography>
         <div className='formcontainer'>
         <form className='createform'>
          <div>
         <TextField label="First Name" variant="outlined" />
         </div>
         <div>
         <TextField label="Last Name" variant="outlined" />
         </div>
         <div>
         <TextField label="Email" variant="outlined" />
         </div>
         <Box sx={{ minWidth: 120 }}>
          
        <FormControl fullWidth>
        <InputLabel id="status">Status</InputLabel>
        <Select
          labelId="status"
          id="status"
          value={status}
          label="Status"
          onChange={handleChange}
        >
          <MenuItem value={'active'}>Active</MenuItem>
          <MenuItem value={'inactive'}>Inactive</MenuItem>
        </Select>
      </FormControl>
    </Box>

    <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-chip-label">Role Abbreviations</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={personName}
          onChange={handleRole}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} onDelete={handleDeleteRole}/>
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
            
            
            


         </form>

         

          </div> 
        
        </Box>
      </Modal>
    </div>
  );
}
