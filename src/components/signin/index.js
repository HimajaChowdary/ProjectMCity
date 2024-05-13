import React, {useState} from "react";
import { firebase } from "../../firebase";

import { CircularProgress } from "@mui/material";
import { useNavigate, Navigate} from "react-router-dom";
import { redirect} from "react-router-dom";

import { useFormik } from "formik";
import * as Yup from 'yup';
import { showErrorToast, showSuccessToast} from '../utils/tools'



const SignIn =(props)=>{
    const navigate =useNavigate();
    
    const [loading, setLoading] =useState(false)

  const formik = useFormik({
    initialValues:{
        email:'',
        password:''
    },
    validationSchema: Yup.object({
        email: Yup.string().email('Invalid email address').required('The email is required'),
        password: Yup.string().required('The password is required')
      }),
      onSubmit: (values) => {
        // go to server with the field values
        console.log("Form submitted!");
        setLoading(true)
        submitForm(values)
      }
    })

    const submitForm = (values) => {
        firebase.auth()
          .signInWithEmailAndPassword(
            values.email,
            values.password
          ) .then(() => {
            showSuccessToast('Welcome back')
    
            navigate('/dashboard')
          }).catch(error => {
            setLoading(false);
            showErrorToast(error.message)
          })
      }      

      if (props.user) {
        // console.log(props.user);
        console.log('Redirecting to dashboard...');
        <Navigate to = "/dashboard"/>
        // navigate("/dashboard")
        // <redirect to ="/dashboard"/>
        return null; // Render nothing here
      }

  return(
    <div className="container">
        <div className="signin_wrapper" style={{  margin:'100px' }} >
            <form onSubmit={formik.handleSubmit}>
                <h2>Please login</h2>
                <input
                     name="email"
                     placeholder="Email"
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}
                     value={formik.values.email}
                     autoComplete="email-placeholder"
                />
                {formik.touched.email && formik.errors.email ? 
                
               <div className="error_label">
                {formik.errors.email}
                </div> 
                : null}

                <input
                     name="password"
                     type="password"
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}
                     value={formik.values.password}
                     autoComplete="new-password"
                />

                {formik.touched.password && formik.errors.password ? 
                
                <div className="error_label">
                 {formik.errors.password}
                 </div> 
                 : null}

                 {
                    loading? 
                       <CircularProgress color="secondary" className="progress"/>

                         :

                         <button type="submit">Log in</button>

                 }

            </form>
            
        </div>
    </div>
    
)
}

export default SignIn;