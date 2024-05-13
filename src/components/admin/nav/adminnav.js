import React from "react";
import { Link } from "react-router-dom";
import {List, ListItem, Button, ListItemButton } from "@mui/material";
import {firebase} from  '../../../firebase';
import { showErrorToast, showSuccessToast, logoutHandler } from "../../utils/tools";

const AdminNav = (props) =>{

    const links =[
        {
                 title: 'Matches',
                 linkTo:'/admin_matches'
        },
        {
                 title:'Players',
                 linkTo:'/admin_players'
        }
    ]
    const renderItems=()=>{
       return links.map(link=>(
        
            <Link to = {link.linkTo} key={link.title}>
                <ListItemButton Button className="admin_nav_link"> 
                    {link.title}
                </ListItemButton>
            </Link>
        ))
    }

 
    return (
        <div>
          {renderItems()}
          <ListItemButton className="admin_nav_link" onClick={() => logoutHandler()}>
            {/* <Button color="inherit">Logout</Button> */}
            Log out
          </ListItemButton>
        </div>
      );
    
}
export default AdminNav;

// import React from "react";
// import { Link } from "react-router-dom";
// import { List, ListItem, Button } from "@mui/material";
// import { firebase } from "../../../firebase";
// import { showErrorToast, showSuccessToast, logoutHandler } from "../../utils/tools";

// const AdminNav = (props) => {
//   const links = [
//     {
//       title: 'Matches',
//       linkTo: '/admin_matches'
//     },
//     {
//       title: 'Players',
//       linkTo: '/admin_players'
//     }
//   ];

//   const renderItems = () => {
//     return links.map(link => (
//       <Button
//         key={link.title}
//         component={Link}
//         to={link.linkTo}
//         className="admin_nav_link"
//         color="inherit"
//       >
//         {link.title}
//       </Button>
//     ));
//   };

//   return (
//     <List>
//       {renderItems()}
//       <ListItem button className="admin_nav_link" onClick={() => logoutHandler()}>
//         <Button color="inherit">Logout</Button>
//       </ListItem>
//     </List>
//   );
// };

// export default AdminNav;

// import React from "react";
// import { Link } from "react-router-dom";
// import { List, ListItem, Button } from "@mui/material";
// import { firebase } from "../../../firebase";
// import { showErrorToast, showSuccessToast, logoutHandler } from "../../utils/tools";

// const AdminNav = (props) => {
//   const links = [
//     {
//       title: 'Matches',
//       linkTo: '/admin_matches'
//     },
//     {
//       title: 'Players',
//       linkTo: '/admin_players'
//     }
//   ];

//   const renderItems = () => {
//     return links.map(link => (
//       <ListItem key={link.title}>
//         <Button
//           component={Link}
//           to={link.linkTo}
//           className="admin_nav_link"
//           color="inherit"
//         >
//           {link.title}
//         </Button>
//       </ListItem>
//     ));
//   };

//   return (
//     <List>
//       {renderItems()}
//       <ListItem button className="admin_nav_link" onClick={() => logoutHandler()}>
//         <Button color="inherit">Logout</Button>
//       </ListItem>
//     </List>
//   );
// };

// export default AdminNav;

