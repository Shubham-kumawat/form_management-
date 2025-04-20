import React from 'react';
import "../StyleSheets/Details.css"
function calculateAge(dob) {
  if (!dob) return '';
  const birthDate = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

function Details({ name ="", dob="", mobileNo="" }) {

  const age = dob ? calculateAge(dob) : '';

 
  return (
    <div className='details'>
      <p>Name: {name}</p>
      <p>DOB: {dob}</p>
      <p>Age: {age}</p>
      <p>Mobile No: {mobileNo}</p>
    </div>
  );
}

export default Details;
