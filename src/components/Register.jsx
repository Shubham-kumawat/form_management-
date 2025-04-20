import { Button, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import "../StyleSheets/Register.css";

const Register = ({ handleInput, handleDateChange, handleSubmit, data }) => {
  return (
    <div className="register">
        <h2>Registration Form</h2>
     
          <TextField
            type="text"
            name="name"
            onChange={handleInput}
            label="Full Name"
            variant="outlined"
            value={data.name || ""} // Add fallback
          />

          <DatePicker
            name="dob"
            onChange={handleDateChange}
            label="Date of Birth"
            variant="outlined"
            value={data.dob } // Add fallback
          />

          <TextField
            type="number"
            onChange={handleInput}
            name="mobile"
            label="Mobile No."
            variant="outlined"
            value={data.mobile || ""} // Add fallback
            inputProps={{ maxLength: 10 }}
          />
          <Button
            // className="w-full bg-blue-500 text-center px-2 py-3 rounded-md cursor-pointer text-white font-semibold"
            type="submit"
            variant="contained"
            onClick={handleSubmit}
          >
            {" "}
            Submit
          </Button>
        </div>

  );
};

export default Register;
