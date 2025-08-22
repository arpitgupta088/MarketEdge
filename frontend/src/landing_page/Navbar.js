// import React from "react";

// function NavBar() {
//   return (
    
//       <nav class="navbar navbar-expand-lg border-bottom" 
//       style={{ backgroundColor: "#f8f9fa" }}>
//         <div class="container p-1">
//           <a class="navbar-brand" href="#">
//             <img src="media/images/projectlogo.png" style={{width:"17%"}}></img>
//           </a>
//           <button
//             class="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNavDropdown"
//             aria-controls="navbarNavDropdown"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span class="navbar-toggler-icon"></span>
//           </button>
//           <div class="collapse navbar-collapse" id="navbarNavDropdown">
         
//             <form class="d-flex" role="search">
//                    <ul class="navbar-nav">
//               <li class="nav-item">
//                 <a class="nav-link active" aria-current="page" href="#">
//                   Signup
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link active" href="#">
//                   About
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link active" href="#">
//                   Product
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link active" href="#">
//                   Pricing
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link active" href="#">
//                   Support
//                 </a>
//               </li>
              
//             </ul>
//             </form>
//           </div>
//         </div>
//       </nav>
//   );
// }

// export default NavBar;
import React from "react";
import {Link} from 'react-router-dom';

function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <div className="container p-1">
        
        <Link className="navbar-brand" href="#">
          <img src="media/images/projectlogo.png" style={{ width: "17%" }} alt="Logo" />
        </Link>

        {/* TOGGLER BUTTON */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* RIGHT SIDE NAV LINKS */}
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <form className="d-flex" role="search">
            <ul className="navbar-nav ms-auto">
              {["Signup", "About", "Product", "Pricing", "Support"].map(
                (item, index) => (
                  <li className="nav-item" key={index}>
                    <a
                      className="nav-link px-3"
                      href="#"
                      style={{
                        fontWeight: "500", // Slightly bold for better readability
                        fontSize: "1.05rem", // Slightly larger font size
                        color: "#333", // Dark grey text for modern feel
                        position: "relative",
                        transition: "color 0.3s ease",
                      }}
                      onMouseOver={(e) => (e.target.style.color = "#0077b6")}
                      onMouseOut={(e) => (e.target.style.color = "#333")}
                    >
                      {item}
                      
                      <span
                        style={{
                          content: '""',
                          position: "absolute",
                          left: "0",
                          bottom: "-3px",
                          width: "0",
                          height: "2px",
                          backgroundColor: "#0077b6",
                          transition: "width 0.3s ease",
                        }}
                        className="nav-underline"
                      ></span>
                    </a>
                  </li>
                )
              )}
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
