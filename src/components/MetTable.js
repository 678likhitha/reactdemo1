import React, { useState } from 'react'
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { TablePagination } from '@material-ui/core';
const MetTable = ({customers}) => {
    const [page, setPage] = useState(0);  
    
    
      const [rowsPerPage, setRowsPerPage] = useState(5);  
const changePage = (newPage) => {
setPage(newPage)
}
const rowsPageChange = (event) => {
setRowsPerPage(+event.target.value);
setPage(0)
}
const handleChangePage = (event, newPage) => {  
    
        setPage(newPage);  
    
      };  
    
      
    
      const handleChangeRowsPerPage = event => {  
    
        setRowsPerPage(+event.target.value);  
    
        setPage(0);  
    
      };  
    
      
  return (
    <div>
        <TableContainer component={Paper}>
<Table stickyHeader aria-label="sticky-label">
    <TableHead>
        <TableRow>
            <TableCell>Id</TableCell>  
            <TableCell>firstName</TableCell>
            <TableCell>LastName</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Zipcide</TableCell>


        </TableRow>
    </TableHead>
    <TableBody>
        {customers&&customers.map((item, index) => (
            <TableRow key={index}>
<TableCell>{index+1}</TableCell>
<TableCell>{item.firstName}</TableCell>
<TableCell>{item.lastName}</TableCell>
<TableCell>{item.email}</TableCell>
<TableCell>{item.address}</TableCell>
<TableCell>{item.zipcode}</TableCell>

            </TableRow>
        ))

        }
    </TableBody>

</Table>
        </TableContainer>
        <TablePagination 

        rowsPerPageOptions={[5, 10, 15]}  

        component="div"  

        count={customers.length}  

        rowsPerPage={rowsPerPage}  

        page={page}  

        onChangePage={handleChangePage}  

        onChangeRowsPerPage={handleChangeRowsPerPage}  

      />  
    </div>
  )
}

export default MetTable