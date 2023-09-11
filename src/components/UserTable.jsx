import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";

import { useSelector } from "react-redux";
import CreateUser from "./CreateUser";
import {Button, Chip, TableHead, Typography,} from "@mui/material";
import { useEffect, useState } from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import "../Styles/UserTable.css";
import EditUser from "./EditUser";
import DeleteUser from "./DeleteUser";

import SearchUser from "./SearchUser";
import '../Styles/UserTable.css'

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

const UserData = () => {

  const rows = useSelector((state) => state.rows);
  // const originalRows = useSelector((state) => state.rows);

  // let searchUser = useSelector(state=>state.searchUser)

  // const [rows , setRows] = useState(originalRows);

  // useEffect(()=>{
  //   // if(searchUser !== '')
  //   // setRows(originalRows.filter((user)=>user.advisorName.toLowerCase().includes(searchUser)))

  //         setRows(  originalRows.filter((user)=>
  //           {
  //               if(searchUser === ''){
  //                   return user;
  //               }
  //               else {
  //                   return user.fname.toLowerCase().includes(searchUser)
  //               }
  //             }))
  // },[searchUser])

  const handleStatus=()=>{
    console.log('Clicked status');
  }

  

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <div>
        <div className="header-section" style={{margin: '15px'}}>
          <Typography className="header-section-heading" variant="h5">
            Advisors List
          </Typography>

          <CreateUser />
        </div>

        <div style={{ height: "85vh", width: "100%" }}>
          

          <TableContainer component={Paper}>
          <div style={{padding: '10px'}}>
          <SearchUser/>
          <Chip style={{margin: '10px'}}
        label="Status"
        onDelete={handleStatus}
        deleteIcon={<ArrowDropDownIcon />}
      />
      <Button style={{color: '#bdbdbd'}}>CLEAR</Button>
          </div>
            <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
              <TableHead className="table-heading">
                <TableRow>
                  <TableCell>S.No</TableCell>
                  <TableCell align="left">Advisor Name</TableCell>
                  <TableCell align="left">Email</TableCell>
                  <TableCell align="left">Institution</TableCell>
                  <TableCell align="left">Role</TableCell>
                  <TableCell align="left">Status</TableCell>
                  <TableCell align="left"></TableCell>
                  <TableCell align="left"></TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {(rowsPerPage > 0
                  ? rows.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                  : rows
                ).map((row) => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell align="left">{row.fname.concat(' ',row.lname)} </TableCell>
                    <TableCell style={{ width: 200 }} align="left">
                      {row.email}
                    </TableCell>
                    <TableCell style={{ width: 200 }} align="left">
                    {
                      
                      row.institution.map((item ,key)=> <Chip key={key} label={item} /> )
                    }

                    </TableCell>
                    <TableCell style={{ width: 200 }} align="left">
                      {
                        row.role.map((item,key)=> <Chip key={key} label={item} />)
                      }

                    </TableCell>
                    <TableCell style={{ width: 200 }} align="left">
                      {row.status == "Active" ? (
                        
                        <Chip variant="outlined" label="Active" sx={{backgroundColor: '#e8f5e9',color: '#2e7d32',borderColor: '#2e7d32'}} />
                      ) : (
                        <Chip variant="outlined" label="In-Active" sx={{backgroundColor: '#fff3e0',color: '#ef6c01',borderColor: '#ef6c01'}} />
                      )}
                    </TableCell>
                    <TableCell style={{ width: 160 }} align="left">
                      <EditUser user={row}/>
                    </TableCell>
                    <TableCell style={{ width: 160 }} align="left">
                      <DeleteUser userId={row.id} />
                    </TableCell>
                  </TableRow>
                ))}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[
                      5,
                      10,
                      25,
                      { label: "All", value: -1 },
                    ]}
                    colSpan={3}
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    SelectProps={{
                      inputProps: {
                        "aria-label": "rows per page",
                      },
                      native: true,
                    }}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    ActionsComponent={TablePaginationActions}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
};

export default UserData;
