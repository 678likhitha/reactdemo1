import logo from './logo.svg';
import './App.css';
import React, { useRef, useState } from 'react';
import CheckBox from './CheckBox';
import MaterialTable from 'material-table';
import Delete from '@material-ui/icons/Delete';
import Refresh from '@material-ui/icons/Refresh';
import Save from '@material-ui/icons/Save';
import AddBox from '@material-ui/icons/AddBox';
import Header from './components/Header';
function App() {
  // const tableRef = useRef(null);
  const [tableData, setTableData] = useState([{
    name:"testUser",phone:"5889464836457",email:"testUser@gmail.com", city:"atp", fee:"677685685"
  },
  {
    name:"testUser",phone:"5889464836457",email:"testUser@gmail.com", city:"atp",fee:"677685685"
  },{
    name:"testUser",phone:null,email:"testUser@gmail.com", city:"atp",fee:"677685685"
  },{
    name:"testUser",phone:"5889464836457",email:"testUser@gmail.com", city:"ftp",fee:"677685685"
  },{
    name:"testUser",phone:"5889464836457",email:"testUser@gmail.com", city:"stp",fee:"677685685"
  }]);
  const columns = [
    {
      title: "Name", field: "name"
    },
    {
      title: "PhoneNumber", field: "phone", emptyValue:() =><em>Null</em>
    },
    {
      title: "Email", field: "email"
    },
    {
      title:"Fee", field:"fee", type:"currency"
    },
    {
      title: "City", field: "city"
    }
  ]
  const tableRef = React.createRef();

  return (
    <div className="App">
      {/* <MaterialTable columns={columns} data={tableData}
      
      tableRef={tableRef}


       actions={[
{
          icon: Save,
          tooltip: 'Save User',
          onClick: (event, rowData) => console.log("You saved ",rowData)
        },
        {
          icon: Delete,
          tooltip: 'Delete User',
          onClick: (event, rowData) => { console.log("You want to delete ",rowData)
        
        }
        }
      ]}
  options={{
    selection: true,
    paging:false,
    showTextRowsSelected:false,
    exportButton:true,

    
  }}
  icons={{Add:()=> <AddBox/>}}
     /> */}
     <Header/>
    </div>
  );
}

export default App;
