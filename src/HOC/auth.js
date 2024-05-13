import React from "react";
import {Navigate} from "react-router-dom";
import { firebase} from '../firebase';


const AuthGuard = (Component)=>{
    class AuthHoc extends React.Component{
     
        authCheck = ()=>{
            const user = firebase.auth().currentUser;
            console.log("***************************"+user)
            if(user){
                return <Component{...this.props}/>

            }else {
                return <Navigate to= "/"/>

            }
        }

         render(){
           return this.authCheck()
         }
    }
    return AuthHoc;
}
export default AuthGuard

