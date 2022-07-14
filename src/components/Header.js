import React, { useEffect, useState } from 'react'
import CustomerTable from './CustomerTable';
import ExportCsv from './ExportCsv';
import MetTable from './MetTable';

const Header = () => {
    const [customers, setCustomers] = useState([]);
    useEffect(()=>{
customersone();
    },[])
    const customersone = () => {
        let cust = [];
        for(var i=0;i<25;i++) {
cust.push({firstName: `first${i}`, lastName: `last${i}`,
email: `abc${i}@gmail.com`, address: `000${i} street city, ST`, zipcode: `0000${i}`})
        }
        
         setCustomers(cust)
    }
  return (
    <div>
        {/* <ExportCsv  csvData={customers} fileName={"userData"}/> */}

{/* <CustomerTable customers={customers} /> */}
<MetTable customers={customers} />
    </div>
  )
}

export default Header