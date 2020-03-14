// import React, { useState } from "react";
// import { NavLink as RouterNavLink } from "react-router-dom";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   Collapse,
//   Container,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   Button,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem
// } from "reactstrap";

// import { useAuth0 } from "./../Authentication/react-auth0-spa";

// const NavBar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
//   const toggle = () => setIsOpen(!isOpen);

//   const logoutWithRedirect = () =>
//     logout({
//       returnTo: window.location.origin
//     });

//   return (
//     <div className="nav-container">
//       <Navbar color="light" light expand="md">
//         <Container>

//           <Nav className="d-none d-md-block" navbar>
//             {!isAuthenticated && (
//               // <Button
//               //   id="qsLoginBtn"
//               //   color="primary"
//               //   className="btn-margin"
//               //   onClick={() => loginWithRedirect({})}
//               // >
//               //   Log in
//               // </Button>
// <></>
//             )}
//             {isAuthenticated && (
//               <Button
//                 id="qsLogoutBtn"
//                 onClick={() => logoutWithRedirect()}
//               >
//                 Log out
//               </Button>
//             )}
//           </Nav>
//           {!isAuthenticated && (
//             <Nav className="d-md-none" navbar>
//               {/* <Button
//                 id="qsLoginBtn"
//                 color="primary"
//                 block
//                 onClick={() => loginWithRedirect({})}
//               >
//                 Log in
//                   </Button> */}
//             </Nav>
//           )}
//           {isAuthenticated && (
//             <Nav
//               className="d-md-none justify-content-between"
//               navbar
//               style={{ minHeight: 170 }}
//             >

//               {/* <FontAwesomeIcon icon="user" className="mr-3" /> */}
//               <Button
//                 to="/profile"
//                 activeClassName="router-link-exact-active"
//               >
//                 Profile
//                   </Button>

//               {/* <FontAwesomeIcon icon="power-off" className="mr-3" /> */}
//               <Button
//                 id="qsLogoutBtn"
//                 onClick={() => logoutWithRedirect()}
//               >
//                 Log out
//                     </Button>
//             </Nav>
//           )}

//         </Container>
//       </Navbar>
//     </div>
//   );
// };

// export default NavBar;