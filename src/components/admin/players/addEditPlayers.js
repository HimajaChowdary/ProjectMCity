
import React, { useEffect, useState } from "react";
import AdminLayout from "../../../HOC/adminlayout";
import { useFormik } from "formik";
import * as Yup from "yup";
import { showErrorToast, showSuccessToast, textErrorHelper } from '../../utils/tools';
import { Select, TextField, MenuItem, FormControl, Button } from "@mui/material";
import { playersCollection, firebase } from "../../../firebase";

const defaultValues = {
  name: "",
  lastname: "",
  number: "",
  position: ""
};

const AddEditPlayers = (props) => {
  const [formType, setFormType] = useState("");
  const [values, setValues] = useState(defaultValues);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: values,
    validationSchema: Yup.object({
      name: Yup.string().required('This input is required'),
      lastname: Yup.string().required('This input is required'),
      number: Yup.number()
        .required('The input is required')
        .min(0, 'The minimum is zero')
        .max(100, 'The maximum is 100'),
      position: Yup.string().required('This input is required')
    })
  });

  useEffect(() => {
    const param = props.match?.params?.playerid; // Use optional chaining to prevent errors
    if (param) {
      setFormType('edit');
      setValues({ name: 'sadf' });
    } else {
      setFormType('add');
      setValues(defaultValues);
    }
  }, [props.match]);
  
  return (
    <AdminLayout title={formType === 'add' ? 'Add player' : 'Edit player'}>
      <div className="editplayers_dialog_wrapper">
        <div>
          <form onSubmit={formik.handleSubmit}>
            image
            <hr />
            <h4>Player info</h4>
            <div className="mb-5">
              <FormControl>
              <TextField
  id="name"
  name="name"
  variant="outlined"
  placeholder="Add firstname"
  {...formik.getFieldProps('name')}
  {...textErrorHelper(formik,'name')}
//   error={formik.touched.name && Boolean(formik.errors.name)} // Use formik.touched and Boolean
//   helperText={formik.touched.name && formik.errors.name} // Display the error message when touched
/>

              </FormControl>
            </div>

            <div className="mb-5">
              <FormControl>
              <TextField
  id="lastname"
  name="lastname"
  variant="outlined"
  placeholder="Add lastname"
  {...formik.getFieldProps('lastname')}
  {...textErrorHelper(formik,'lastname')}
//   error={formik.touched.name && Boolean(formik.errors.name)} // Use formik.touched and Boolean
//   helperText={formik.touched.name && formik.errors.name} // Display the error message when touched
/>

              </FormControl>
            </div>

            <div className="mb-5">
              <FormControl>
              <TextField
  id="number"
  name="number"
  variant="outlined"
  placeholder="Add number"
  {...formik.getFieldProps('number')}
  {...textErrorHelper(formik,'number')}
//   error={formik.touched.name && Boolean(formik.errors.name)} // Use formik.touched and Boolean
//   helperText={formik.touched.name && formik.errors.name} // Display the error message when touched
/>

              </FormControl>
            </div>

            <div className="mb-5">
              <FormControl error={true}>
              <Select
  id="name"
  name="name"
  variant="outlined"
  placeholder="Add number"
  {...formik.getFieldProps('position')}>
    <MenuItem value=""disabled>Select a position</MenuItem>
    <MenuItem value="Keeper">Keeper</MenuItem>
    <MenuItem value="Defence">Defence</MenuItem>
    <MenuItem value="Midfield">Midfield</MenuItem>
    <MenuItem value="Striker">Striker</MenuItem>
  </Select>
              </FormControl>
            </div>

          </form>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AddEditPlayers;

