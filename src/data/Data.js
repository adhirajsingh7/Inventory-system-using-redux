const columns = [
  { field: 'id', headerName: 'S.No', width: 70 },
  { field: 'advisorName', headerName: 'Advisor Name', width: 130 },
  { field: 'email', headerName: 'Email', width: 130 },
  { field: 'institution', headerName: 'Institution', width: 130 },
  { field: 'role', headerName: 'Role', width: 130 },
  { field: 'status', headerName: 'Status', width: 130 },
]

const rows = [
    { id: 1, advisorName: 'Jon', email: 'abc@email.com', institution: 'FBR', role: 'Teacher', status: 'Active'},
    { id: 2, advisorName: 'Cersei', email: 'abc@email.com', institution: 'UEA', role: 'Mentor', status: 'Active'},
    { id: 3, advisorName: 'Jaime', email: 'abc@email.com', institution: 'FBR', role: 'Teacher', status: 'InActive'},
    { id: 4,advisorName: 'Arya', email: 'abc@email.com', institution: 'UEA', role: 'Mentor', status: 'Active'},
    { id: 5, advisorName: 'Daenerys', email: 'abc@email.com', institution: 'FBR', role: 'Mentor', status: 'InActive'},
    { id: 6, advisorName: 'John', email: 'abc@email.com', institution: 'UEA', role: 'Teacher', status: 'Active'},
    { id: 7, advisorName: 'Ferrara', email: 'abc@email.com', institution: 'FBR', role: 'Teacher', status: 'InActive'},
    { id: 8, advisorName: 'Rossini', email: 'abc@email.com', institution: 'FBR', role: 'Mentor', status: 'Active'},
    { id: 9,advisorName: 'Harvey', email: 'abc@email.com', institution: 'UEA', role: 'Teacher', status: 'Active'},
]

export {columns ,rows}