import React, { useState } from 'react'
import Register from './components/Register.jsx'
import UserTable from './components/UserTable.jsx';
import "./App.css";


const App = () => {
  

  const [data, setData] = useState({});
  const [userList, setUserList] = useState([]);


  const handleInput = (e) =>{
    setData({
      ...data,
    [e.target.name] : e.target.value,
    })
   
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.name && data.dob && data.mobile) {
      setUserList(prev => [...prev, {...data}]);
      // Properly reset form fields
      setData({
        name: '',
        dob: '',
        mobile: ''
      });
    }
  };


  const handleDateChange = (date) => {
    if (!date) return;

    const isoDate = date.toISOString().split('T')[0];
    setData(prev => ({
      ...prev,
      dob: isoDate
    }));
  };
  

  console.log(userList)
  // console.log(data)

  return (
    <div className='App'>
        <Register data = {data} handleInput = {handleInput} handleDateChange = {handleDateChange} handleSubmit={handleSubmit}  />

        <UserTable   key={userList.length} users={userList} />
    </div>
  )
}

export default App