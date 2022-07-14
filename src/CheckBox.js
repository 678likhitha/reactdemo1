import React, { useEffect, useState } from "react";
import "./App.css";
import Input from "./Input";

function CheckBox() {
const [userinfo, setUserInfo] = useState({
	languages: [],
	response: [],
});

const [fruites, setFruites] = useState([
    { id: 1, value: "banana", isChecked: false },
    { id: 2, value: "apple", isChecked: false },
    { id: 3, value: "mango", isChecked: false },
    { id: 4, value: "grap", isChecked: false }
]);
const [selectall, setSelectAll] = useState(false);
useEffect(()=>{

},[fruites])
const handleChange = (e) => {
    const fData = [];

    fruites.forEach(i => {
        if(i.value === e.target.value) {
            i.isChecked = e.target.checked;
            fData.push(i);
        }else {
            fData.push(i)
        }
    });
    setFruites(fData);
   

   
}

const changeDate = () => {
    console.log(fruites, "fruites")
}
const allDataShow = (e) => {
    const allData = []
    fruites.forEach(i => {
            i.isChecked = e.target.checked;
            allData.push(i);
    });
    setFruites(allData)

}
return (
	<>
	<div className="container-fluid top ">
		<div className="container mt-5 pb-5 pt-5">
		<h3 className="form-head-contact-h3 ">

			Your programming expertise lies in what languages?{" "}
            <input type="checkbox" value="selectAll" name="select" onChange={allDataShow}/>
            { fruites&&fruites.map((item, key)=>(
                <div key={key}>
                                    <Input fruitesData= {item} handleChange={handleChange}/>

                </div>
            ))}
		</h3>
        <button onClick={changeDate}>Button</button>
		</div>
	</div>
	</>
);
}

export default CheckBox;
