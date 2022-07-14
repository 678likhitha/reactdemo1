import React from 'react'
import { Table } from 'react-bootstrap'
const CustomerTable = ({customers}) => {
    console.log(customers,"customer")

    const customerRow = (customer, index) => {
        return(
        <tr key = {index} className='even'>
        <td> {index + 1} </td>
        <td>{customer.firstName}</td>
        <td>{customer.lastName}</td>
        <td>{customer.email}</td>
        <td>{customer.address}</td>
        <td>{customer.zipcode}</td>
    </tr>
        )
    }

    const CustomerTable = customers.map((cust,index) => customerRow(cust,index))

  return (
    <div>
        <Table striped bordered hover>
        <thead className='bgvi'>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Zipcode</th>
                            </tr>
                        </thead>            
                        <tbody>
                            {CustomerTable}
            </tbody>
        </Table>

    </div>
  )
}

export default CustomerTable