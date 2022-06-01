import React from "react";
// import "../App.css";
import "./Home.css";
import Cards from "../AllCards/Cards";
import Navbar from "../Navbar/Navbar";

export default function Home() {
  // hay que seguir el video de selene, solo llegaste al minuto 3 drogon

  return (
    <div>
      <Navbar />
      <Cards />
    </div>
  );
}

// function Home() {
//   return (
//     <div className="home-container">
//       <h1>Welcome Dog lovers</h1>
//       <p>This is a web site for our four paws friends</p>
//       <div className="home-btn">
//         <Boton
//           className="btn"
//           buttonStyle="btn--outline"
//           buttonSize="btn--large"
//         >
//           LETS SEE
//         </Boton>
//         <Footer></Footer>
//       </div>
//     </div>
//   );
// }

// export default Home;
