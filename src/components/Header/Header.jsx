import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="headerLeft">
        <nav class="navMenu">
          <Link to="/movies/popular" className="span">
            <span>Popular</span>
          </Link>
          <Link to="/movies/top_rated" className="span">
            <span>Top Rated</span>
          </Link>
          <Link to="/movies/upcoming" className="span">
            <span>Upcoming</span>
          </Link>

          <div class="dot"></div>
        </nav>
      </div>
    </div>

    // <div className="header">
    //   <div className="headerLeft">
    //     <Link to="/">
    //       <img
    //         className="header__icon"
    //         src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
    //       />
    //     </Link>
    //     <ul>
    //       <Link to="/movies/popular" style={{ textDecoration: "none" }}>
    //         <li>Popular</li>
    //       </Link>
    //       <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
    //         <li>Top Rated</li>
    //       </Link>
    //       <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
    //         <li>Upcoming</li>
    //       </Link>
    //     </ul>
    //   </div>
    // </div>
  );
};

export default Header;

// import React from "react";
// import "./Header.css";
// import { Link } from "react-router-dom";

// const Header = () => {
//   return (
//     <div className="header">
//       <ul>
//         <div>
//           <img
//             className="header_icon"
//             src="https://cdn0.iconfinder.com/data/icons/social-media-2091/100/social-31-512.png"
//           />
//         </div>
//         <Link to="/" style={{ textDecoration: "none" }}>
//           <li>Home</li>
//         </Link>
//         <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
//           <li>Top Rated</li>
//         </Link>
//         <Link to="/movies/popular" style={{ textDecoration: "none" }}>
//           <li>Popular</li>
//         </Link>
//         <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
//           <li>Upcoming</li>
//         </Link>

//         <div>
//           <img
//             className="avatar_icon"
//             src="https://avatars.githubusercontent.com/u/69521378?v=4"
//           />
//         </div>
//       </ul>
//     </div>
//   );
// };

// export default Header;
