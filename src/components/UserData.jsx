import { Button, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import '../Styles/UserData.css'
import {columns,rows} from '../data/Data'


const UserData =()=>{
    return (
      <>
      <div >
      <div className='header-section'>
        
          <Typography className='header-section-heading' variant='h5'>Advisors List</Typography>
          
          
          <Button className='header-section-button' variant='contained'>Create</Button>
          
        </div>
        <div style={{ height: '85vh', width: '100%' }}>
      <DataGrid 
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
    </div>
      </>
    );
  }

export default UserData;